const Complaint = require("../models/Complaint");
const User = require("../models/User");

const { analyzeComplaint } = require("../services/aiServices");

const {
  generateComplaintEmbedding,
  findSimilarComplaints,
} = require("../services/similarityServices");

// Student creates a complaint
const createComplaint = async (req, res) => {
  try {
    const {
      title,
      description,
      category,
      subCategory,
      location,
      imageUrl,
    } = req.body;

    if (!title || !description) {
      return res.status(400).json({
        success: false,
        message: "Title and description are required",
      });
    }

// Generate AI priority and summary
const aiResult = await analyzeComplaint(title, description);

// Generate embedding for the new complaint
const embedding = await generateComplaintEmbedding(
  title,
  description
);

// Get existing complaints that already have embeddings
const existingComplaints = await Complaint.find({
  embedding: { $exists: true, $ne: [] },
}).select("_id embedding");

// Find similar complaints
const similarComplaints = await findSimilarComplaints(
  embedding,
  existingComplaints
);

  const complaint = await Complaint.create({
  title,
  description,
  category: category || "Other",
  subCategory: subCategory || "",
  priority: aiResult.priority,
  location: location || "",
  imageUrl: imageUrl || "",

  aiSummary: aiResult.summary,
  aiProcessed: true,

  embedding,

  similarComplaints,

  student: req.user.id,
});

    res.status(201).json({
      success: true,
      message: "Complaint submitted successfully",
      complaint,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Student views their own complaints
const getMyComplaints = async (req, res) => {
  try {
    const complaints = await Complaint.find({
      student: req.user.id,
    })
      .populate("department", "name")
      .populate("assignedStaff", "name email")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: complaints.length,
      complaints,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get a single complaint
const getComplaintById = async (req, res) => {
  try {
    const complaint = await Complaint.findById(req.params.id)
      .populate("student", "name email")
      .populate("department", "name")
      .populate("assignedStaff", "name email");

    if (!complaint) {
      return res.status(404).json({
        success: false,
        message: "Complaint not found",
      });
    }

    // Students can only view their own complaints
    if (
      req.user.role === "student" &&
      complaint.student._id.toString() !== req.user.id.toString()
    ) {
      return res.status(403).json({
        success: false,
        message: "You can only view your own complaints",
      });
    }

    res.status(200).json({
      success: true,
      complaint,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Staff/Admin view complaints
const getAllComplaints = async (req, res) => {
  try {
    let filter = {};

    // Staff can only see complaints assigned to their department
    if (req.user.role === "staff") {
      const staff = await User.findById(req.user.id);

      if (!staff || !staff.department) {
        return res.status(400).json({
          success: false,
          message: "Staff department is not assigned",
        });
      }

      filter.department = staff.department;
    }

    const complaints = await Complaint.find(filter)
      .populate("student", "name email")
      .populate("department", "name")
      .populate("assignedStaff", "name email")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: complaints.length,
      complaints,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Update complaint status
const updateComplaintStatus = async (req, res) => {
  try {
    const { status, resolutionNote } = req.body;

    const allowedStatuses = [
      "SUBMITTED",
      "ASSIGNED",
      "IN_PROGRESS",
      "RESOLVED",
      "CLOSED",
      "REJECTED",
    ];

    if (!status || !allowedStatuses.includes(status)) {
      return res.status(400).json({
        success: false,
        message: "Invalid complaint status",
      });
    }

    const complaint = await Complaint.findById(req.params.id);

    if (!complaint) {
      return res.status(404).json({
        success: false,
        message: "Complaint not found",
      });
    }

    // Staff can only update complaints in their department
    if (req.user.role === "staff") {
      const staff = await User.findById(req.user.id);

      if (
        !staff ||
        !staff.department ||
        !complaint.department ||
        staff.department.toString() !== complaint.department.toString()
      ) {
        return res.status(403).json({
          success: false,
          message: "You cannot update this complaint",
        });
      }
    }

    complaint.status = status;

    if (resolutionNote !== undefined) {
      complaint.resolutionNote = resolutionNote;
    }

    if (status === "RESOLVED") {
      complaint.resolvedAt = new Date();
    }

    await complaint.save();

    res.status(200).json({
      success: true,
      message: "Complaint status updated successfully",
      complaint,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Assign complaint to staff
const assignComplaint = async (req, res) => {
  try {
    const { staffId } = req.body;

    if (!staffId) {
      return res.status(400).json({
        success: false,
        message: "Staff ID is required",
      });
    }

    const complaint = await Complaint.findById(req.params.id);

    if (!complaint) {
      return res.status(404).json({
        success: false,
        message: "Complaint not found",
      });
    }

    const staff = await User.findById(staffId);

    if (!staff) {
      return res.status(404).json({
        success: false,
        message: "Staff member not found",
      });
    }

    if (staff.role !== "staff") {
      return res.status(400).json({
        success: false,
        message: "Selected user is not a staff member",
      });
    }

    if (
      complaint.department &&
      staff.department &&
      complaint.department.toString() !== staff.department.toString()
    ) {
      return res.status(400).json({
        success: false,
        message: "Staff does not belong to the complaint department",
      });
    }

    complaint.assignedStaff = staffId;

    if (complaint.status === "SUBMITTED") {
      complaint.status = "ASSIGNED";
    }

    await complaint.save();

    res.status(200).json({
      success: true,
      message: "Complaint assigned successfully",
      complaint,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createComplaint,
  getMyComplaints,
  getComplaintById,
  getAllComplaints,
  updateComplaintStatus,
  assignComplaint,
};
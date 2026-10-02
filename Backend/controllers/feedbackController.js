const Feedback = require("../models/Feedback");
const Complaint = require("../models/Complaint");

const createFeedback = async (req, res) => {
  try {
    const { complaintId, rating, comment } = req.body;

    if (!complaintId || !rating) {
      return res.status(400).json({
        success: false,
        message: "Complaint ID and rating are required",
      });
    }

    if (rating < 1 || rating > 5) {
      return res.status(400).json({
        success: false,
        message: "Rating must be between 1 and 5",
      });
    }

    const complaint = await Complaint.findById(complaintId);

    if (!complaint) {
      return res.status(404).json({
        success: false,
        message: "Complaint not found",
      });
    }

    if (complaint.student.toString() !== req.user.id.toString()) {
      return res.status(403).json({
        success: false,
        message: "You can only give feedback for your own complaint",
      });
    }

    if (!["RESOLVED", "CLOSED"].includes(complaint.status)) {
      return res.status(400).json({
        success: false,
        message: "Feedback can be submitted only after resolution",
      });
    }

    const existingFeedback = await Feedback.findOne({
      complaint: complaintId,
      student: req.user.id,
    });

    if (existingFeedback) {
      return res.status(400).json({
        success: false,
        message: "Feedback already submitted",
      });
    }

    const feedback = await Feedback.create({
      complaint: complaintId,
      student: req.user.id,
      rating,
      comment: comment || "",
    });

    res.status(201).json({
      success: true,
      message: "Feedback submitted successfully",
      feedback,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getMyFeedback = async (req, res) => {
  try {
    const feedback = await Feedback.find({
      student: req.user.id,
    })
      .populate("complaint", "title status")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: feedback.length,
      feedback,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getAllFeedback = async (req, res) => {
  try {
    const feedback = await Feedback.find()
      .populate("complaint", "title status")
      .populate("student", "name email")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: feedback.length,
      feedback,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createFeedback,
  getMyFeedback,
  getAllFeedback,
};
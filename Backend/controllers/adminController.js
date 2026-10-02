const Complaint = require("../models/Complaint");
const User = require("../models/User");
const Department = require("../models/Department");
const Feedback = require("../models/Feedback");

const getDashboardStats = async (req, res) => {
  try {
    const [
      totalUsers,
      totalStudents,
      totalStaff,
      totalComplaints,
      submitted,
      assigned,
      inProgress,
      resolved,
      closed,
      rejected,
      totalDepartments,
      feedbackStats,
    ] = await Promise.all([
      User.countDocuments(),
      User.countDocuments({ role: "student" }),
      User.countDocuments({ role: "staff" }),
      Complaint.countDocuments(),
      Complaint.countDocuments({ status: "SUBMITTED" }),
      Complaint.countDocuments({ status: "ASSIGNED" }),
      Complaint.countDocuments({ status: "IN_PROGRESS" }),
      Complaint.countDocuments({ status: "RESOLVED" }),
      Complaint.countDocuments({ status: "CLOSED" }),
      Complaint.countDocuments({ status: "REJECTED" }),
      Department.countDocuments({ isActive: true }),
      Feedback.aggregate([
        {
          $group: {
            _id: null,
            averageRating: { $avg: "$rating" },
            totalFeedback: { $sum: 1 },
          },
        },
      ]),
    ]);

    const categoryStats = await Complaint.aggregate([
      {
        $group: {
          _id: "$category",
          count: { $sum: 1 },
        },
      },
      {
        $sort: { count: -1 },
      },
    ]);

    const priorityStats = await Complaint.aggregate([
      {
        $group: {
          _id: "$priority",
          count: { $sum: 1 },
        },
      },
    ]);

    const departmentStats = await Complaint.aggregate([
      {
        $lookup: {
          from: "departments",
          localField: "department",
          foreignField: "_id",
          as: "departmentInfo",
        },
      },
      {
        $unwind: {
          path: "$departmentInfo",
          preserveNullAndEmptyArrays: true,
        },
      },
      {
        $group: {
          _id: "$departmentInfo.name",
          count: { $sum: 1 },
        },
      },
      {
        $sort: { count: -1 },
      },
    ]);

    res.status(200).json({
      success: true,

      overview: {
        totalUsers,
        totalStudents,
        totalStaff,
        totalComplaints,
        totalDepartments,
      },

      complaintsByStatus: {
        submitted,
        assigned,
        inProgress,
        resolved,
        closed,
        rejected,
      },

      complaintsByCategory: categoryStats,

      complaintsByPriority: priorityStats,

      complaintsByDepartment: departmentStats,

      feedback: {
        averageRating:
          feedbackStats.length > 0
            ? Number(feedbackStats[0].averageRating.toFixed(2))
            : 0,
        totalFeedback:
          feedbackStats.length > 0
            ? feedbackStats[0].totalFeedback
            : 0,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getDashboardStats,
};
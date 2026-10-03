const mongoose = require("mongoose");

const complaintSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
      trim: true,
    },

    category: {
      type: String,
      enum: [
        "Academic",
        "Hostel",
        "Electrical",
        "Water Supply",
        "IT/Internet",
        "Library",
        "Canteen",
        "Cleanliness",
        "Transportation",
        "Security",
        "Other",
      ],
      default: "Other",
    },

    subCategory: {
      type: String,
      default: "",
      trim: true,
    },

    priority: {
      type: String,
      enum: ["Low", "Medium", "High", "Critical"],
      default: "Medium",
    },

    location: {
      type: String,
      trim: true,
      default: "",
    },

    imageUrl: {
      type: String,
      default: "",
    },

    status: {
      type: String,
      enum: [
        "SUBMITTED",
        "ASSIGNED",
        "IN_PROGRESS",
        "RESOLVED",
        "CLOSED",
        "REJECTED",
      ],
      default: "SUBMITTED",
    },

    aiSummary: {
      type: String,
      default: "",
    },

    aiConfidence: {
      type: Number,
      default: null,
    },

    aiProcessed: {
      type: Boolean,
      default: false,
    },

    embedding: {
      type: [Number],
      default: [],
    },

    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    department: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Department",
      default: null,
    },

    assignedStaff: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },

    similarComplaints: [
      {
        complaint: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Complaint",
        },

        similarityScore: {
          type: Number,
        },
      },
    ],

    resolutionNote: {
      type: String,
      default: "",
    },

    resolvedAt: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Complaint", complaintSchema);
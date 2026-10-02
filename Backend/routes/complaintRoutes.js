const express = require("express");

const {
  createComplaint,
  getMyComplaints,
  getComplaintById,
  getAllComplaints,
  updateComplaintStatus,
  assignComplaint,
} = require("../controllers/complaintController");

const { protect } = require("../middleware/authMiddleware");
const authorize = require("../middleware/roleMiddleware");

const router = express.Router();

// Student
router.post("/", protect, authorize("student"), createComplaint);
router.get("/my", protect, authorize("student"), getMyComplaints);

// Staff + Admin
router.get(
  "/",
  protect,
  authorize("staff", "admin"),
  getAllComplaints
);

// Any authorized user can view a specific complaint
router.get("/:id", protect, getComplaintById);

// Staff + Admin can update status
router.patch(
  "/:id/status",
  protect,
  authorize("staff", "admin"),
  updateComplaintStatus
);

// Staff + Admin can assign complaint
router.patch(
  "/:id/assign",
  protect,
  authorize("staff", "admin"),
  assignComplaint
);

module.exports = router;
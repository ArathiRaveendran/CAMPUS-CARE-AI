const express = require("express");

const {
  createFeedback,
  getMyFeedback,
  getAllFeedback,
} = require("../controllers/feedbackController");

const { protect } = require("../middleware/authMiddleware");
const authorize = require("../middleware/roleMiddleware");

const router = express.Router();

router.post("/", protect, authorize("student"), createFeedback);

router.get("/my", protect, authorize("student"), getMyFeedback);

router.get(
  "/",
  protect,
  authorize("admin"),
  getAllFeedback
);

module.exports = router;
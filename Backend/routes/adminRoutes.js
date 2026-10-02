const express = require("express");

const {
  getDashboardStats,
} = require("../controllers/adminController");

const { protect } = require("../middleware/authMiddleware");
const authorize = require("../middleware/roleMiddleware");

const router = express.Router();

router.get(
  "/dashboard",
  protect,
  authorize("admin"),
  getDashboardStats
);

module.exports = router;
const express = require("express");

const {
  getAllUsers,
  getAllStaff,
  updateUser,
  deactivateUser,
} = require("../controllers/userController");

const { protect } = require("../middleware/authMiddleware");
const authorize = require("../middleware/roleMiddleware");

const router = express.Router();

// Admin only
router.get(
  "/",
  protect,
  authorize("admin"),
  getAllUsers
);

router.get(
  "/staff",
  protect,
  authorize("admin", "staff"),
  getAllStaff
);

router.put(
  "/:id",
  protect,
  authorize("admin"),
  updateUser
);

router.patch(
  "/:id/deactivate",
  protect,
  authorize("admin"),
  deactivateUser
);

module.exports = router;
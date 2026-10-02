const express = require("express");

const {
  createDepartment,
  getDepartments,
  getDepartmentById,
  updateDepartment,
  deleteDepartment,
} = require("../controllers/departmentController");

const { protect } = require("../middleware/authMiddleware");
const authorize = require("../middleware/roleMiddleware");

const router = express.Router();

// Anyone logged in can view departments
router.get("/", protect, getDepartments);
router.get("/:id", protect, getDepartmentById);

// Only admin can manage departments
router.post(
  "/",
  protect,
  authorize("admin"),
  createDepartment
);

router.put(
  "/:id",
  protect,
  authorize("admin"),
  updateDepartment
);

router.delete(
  "/:id",
  protect,
  authorize("admin"),
  deleteDepartment
);

module.exports = router;
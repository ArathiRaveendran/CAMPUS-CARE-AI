const Department = require("../models/Department");

// Create department
const createDepartment = async (req, res) => {
  try {
    const { name, description } = req.body;

    if (!name) {
      return res.status(400).json({
        success: false,
        message: "Department name is required",
      });
    }

    const existingDepartment = await Department.findOne({ name });

    if (existingDepartment) {
      return res.status(400).json({
        success: false,
        message: "Department already exists",
      });
    }

    const department = await Department.create({
      name,
      description: description || "",
    });

    res.status(201).json({
      success: true,
      message: "Department created successfully",
      department,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get all departments
const getDepartments = async (req, res) => {
  try {
    const departments = await Department.find({ isActive: true })
      .sort({ name: 1 });

    res.status(200).json({
      success: true,
      count: departments.length,
      departments,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get single department
const getDepartmentById = async (req, res) => {
  try {
    const department = await Department.findById(req.params.id);

    if (!department) {
      return res.status(404).json({
        success: false,
        message: "Department not found",
      });
    }

    res.status(200).json({
      success: true,
      department,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Update department
const updateDepartment = async (req, res) => {
  try {
    const { name, description, isActive } = req.body;

    const department = await Department.findById(req.params.id);

    if (!department) {
      return res.status(404).json({
        success: false,
        message: "Department not found",
      });
    }

    if (name) department.name = name;
    if (description !== undefined) department.description = description;
    if (isActive !== undefined) department.isActive = isActive;

    await department.save();

    res.status(200).json({
      success: true,
      message: "Department updated successfully",
      department,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete department
const deleteDepartment = async (req, res) => {
  try {
    const department = await Department.findById(req.params.id);

    if (!department) {
      return res.status(404).json({
        success: false,
        message: "Department not found",
      });
    }

    // Soft delete
    department.isActive = false;
    await department.save();

    res.status(200).json({
      success: true,
      message: "Department deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createDepartment,
  getDepartments,
  getDepartmentById,
  updateDepartment,
  deleteDepartment,
};
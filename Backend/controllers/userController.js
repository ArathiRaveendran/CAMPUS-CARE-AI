const User = require("../models/User");
const bcrypt = require("bcryptjs");

// Get all users - Admin only
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find()
      .select("-password")
      .populate("department", "name")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: users.length,
      users,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get all staff - Admin only
const getAllStaff = async (req, res) => {
  try {
    const staff = await User.find({ role: "staff" })
      .select("-password")
      .populate("department", "name")
      .sort({ name: 1 });

    res.status(200).json({
      success: true,
      count: staff.length,
      staff,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Update user - Admin only
const updateUser = async (req, res) => {
  try {
    const { name, email, role, department, isActive } = req.body;

    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    if (name !== undefined) user.name = name;
    if (email !== undefined) user.email = email;
    if (role !== undefined) user.role = role;
    if (department !== undefined) user.department = department;
    if (isActive !== undefined) user.isActive = isActive;

    await user.save();

    const updatedUser = await User.findById(user._id)
      .select("-password")
      .populate("department", "name");

    res.status(200).json({
      success: true,
      message: "User updated successfully",
      user: updatedUser,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete/deactivate user - Admin only
const deactivateUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    user.isActive = false;
    await user.save();

    res.status(200).json({
      success: true,
      message: "User deactivated successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getAllUsers,
  getAllStaff,
  updateUser,
  deactivateUser,
};
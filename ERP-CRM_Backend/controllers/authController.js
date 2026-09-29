import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Role from "../models/role.js";
import Department from "../models/deparment.js";
import User from "../models/user.js";
import { setPermissionsBasedOnRole } from "../lib/permission.js";

export const register = async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    password,
    contactNumber,
    address,
    department,
    roleName,
    reportedTo,
  } = req.body;

  try {
    const role = await Role.findOne({ where: { name: roleName } });
    if (!role) {
      return res.status(404).json({
        message: "role not found!",
      });
    }

    const depart = await Department.findOne({ where: { name: department } });
    if (!depart) {
      return res.status(404).json({
        message: "department not found!",
      });
    }

    const permissions = setPermissionsBasedOnRole(roleName);

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      contactNumber,
      address,
      department,
      roleName,
      permissions,
      reportedTo,
      createdBy: new Date(),
    });

    return res.status(201).json({ user });
  } catch (error) {
    console.error("User creation error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(404).json({
        success: false,
        message: "All fields are required",
      });
    }
    const existUser = await User.findOne({ where: { email } });
    if (!existUser) {
      return res.status(404).json({
        success: false,
        message: "User does not exist",
      });
    }

    if (await bcrypt.compare(password, existUser.password)) {
      const payload = {
        userId: existUser.id,
        email: existUser.email,
        role: existUser.roleName,
        fullName: existUser.firstName + ' ' + existUser.lastName
      };

      const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "7d",
      });

      existUser.token = token;

      const option = {
        httpOnly: true,
        secure: true,
      };

      return res.cookie("token", token, option).status(200).json({
        success: true,
        message: "Login successfull",
        existUser,
        token,
      });
    } else {
      return res.status(404).json({
        success: false,
        message: "Incrroct password ",
      });
    }
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: "Login failed",
    });
  }
};

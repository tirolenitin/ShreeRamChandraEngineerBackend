import bcrypt from "bcrypt";

import "../config/dbConnection.js";
import Admin from "../models/adminModel.js";

export const login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await Admin.findOne({ email });
    if (user) {
      const match = await bcrypt.compare(password, user.password);
      if (match) {
        res
          .status(200)
          .json({ success: true, message: "Logged In Successfully" });
      } else {
        res
          .status(401)
          .json({ success: false, message: "Password does not match" });
      }
    } else {
      res.status(500).json({ success: true, message: "User Not Found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error logging in", error: error.message });
  }
};

export const save = async (req, res, next) => {
  const { fullName, email, password, mobile } = req.body;
  console.log(password);
  try {
    const hashPassword = await bcrypt.hash(password, 10);
    console.log(hashPassword);
    const adminData = {
      fullName,
      email,
      mobile,
      password: hashPassword,
    };
    console.log(adminData);
    const response = await Admin.create(adminData);

    if (response) {
      res.status(201).json({
        success: true,
        message: "User Registration Successfully",
      });
    } else {
      res.status(500).json({
        success: false,
        message: "Internal ServerError",
      });
    }
  } catch (error) {
    res.status(501).json({
      message: error,
      success: false,
    });
  }
};

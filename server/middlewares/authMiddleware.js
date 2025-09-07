import jwt from "jsonwebtoken";
import Company from "../models/Company.js";

export const protectCompany = async (req, res, next) => {
  // Get the Authorization header
  const token = req.headers.token;
  
  if (!token) {
    return res.json({ success: false, message: "Not authorised Login Again" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.company = await Company.findById(decoded.id).select("-password");
    next();
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};

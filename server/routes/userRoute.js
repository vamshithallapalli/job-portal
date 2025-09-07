import express from "express";
import { clerkMiddleware, requireAuth } from "@clerk/express";
import multer from "multer";
import {
  applyForJob,
  getUserData,
  getUserJobApplications,
  updateUserResume,
} from "../controllers/userController.js";

const router = express.Router();
const upload = multer({ dest: "uploads/" });

// Get user data
router.get("/user", requireAuth(), getUserData);

// Apply for job
router.post("/apply", requireAuth(), applyForJob);

// Get Applied jobs data
router.get("/applications", requireAuth(), getUserJobApplications);

// Update user profile - resume
router.post(
  "/update-resume",
  requireAuth(),
  upload.single("resume"),
  updateUserResume
);

export default router;

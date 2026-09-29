import express from "express";
import {
  createCourse,
  getAllCourses,
  getCourseById,
  updateCourse,
  deleteCourse,
} from "../controllers/courseController.js";

const router = express.Router();
router.post("/create", createCourse);
router.get("/gets", getAllCourses);
router.get("/get", getCourseById);
router.put("/course/:id", updateCourse);
router.delete("/course/:id", deleteCourse);

export default router;

import Course from "../models/course.js";
import User from "../models/user.js";


export const createCourse = async (req, res) => {
  try {
    const { courseName, amount, discountAmount, document, createBy } = req.body;

    const course = await Course.create({
      courseName,
      amount,
      discountAmount,
      document,
      createBy,
    });

    res.status(201).json(course);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


export const getAllCourses = async (req, res) => {
  try {
    const courses = await Course.findAll({
      include: [{ model: User, attributes: ['firstName', 'lastName'] }],
    });
    res.status(200).json(courses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


export const getCourseById = async (req, res) => {
  try {
    const { id } = req.params;
    const course = await Course.findByPk(id, {
      include: [{ model: User, attributes: ['firstName', 'lastName'] }],
    });

    if (!course) {
      return res.status(404).json({ error: "Course not found" });
    }

    res.status(200).json(course);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


export const updateCourse = async (req, res) => {
  try {
    const { id } = req.params;
    const { courseName, amount, discountAmount, document, updatedBy } = req.body;

    const course = await Course.findByPk(id);

    if (!course) {
      return res.status(404).json({ error: "Course not found" });
    }

    await course.update({
      courseName,
      amount,
      discountAmount,
      document,
      updatedBy,
    });

    res.status(200).json(course);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


export const deleteCourse = async (req, res) => {
  try {
    const { id } = req.params;
    const course = await Course.findByPk(id);

    if (!course) {
      return res.status(404).json({ error: "Course not found" });
    }

    await course.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

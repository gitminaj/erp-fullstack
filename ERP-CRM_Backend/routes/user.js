import express from "express";
import {
  // createUser,
  updateUser,
  listUsers,
  getUser,
  deleteUser,
  getRoles,
  getDepartmets,
} from "../controllers/userController.js";

const router = express.Router();

router.get("/roles", getRoles);
router.get("/departments", getDepartmets);
router.get("/users", listUsers);
router.get("/users/:id", getUser);
// router.post("/create", createUser);
router.put("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);

export default router;

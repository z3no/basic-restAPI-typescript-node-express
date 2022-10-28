import { Router } from "express";
import {
  createTodo,
  deleteTodo,
  getTodos,
  updateTodo,
} from "../controllers/todos";

const router = Router();

// POST TO DO
router.post("/", createTodo);

// GET TO DO
router.get("/", getTodos);

// UPDATE A TO DO
router.patch("/:id", updateTodo);

// DELETE A TO DO
router.delete("/:id", deleteTodo);

export default router;

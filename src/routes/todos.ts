import { Router } from "express";

const router = Router();

// POST TO DO
router.post("/");

// GET TO DO
router.get("/");

// UPDATE A TO DO
router.patch("/:id");

// DELETE A TO DO
router.delete("/:id");

export default router;

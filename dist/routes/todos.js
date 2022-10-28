"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todos_1 = require("../controllers/todos");
const router = (0, express_1.Router)();
// POST TO DO
router.post("/", todos_1.createTodo);
// GET TO DO
router.get("/", todos_1.getTodos);
// UPDATE A TO DO
router.patch("/:id", todos_1.updateTodo);
// DELETE A TO DO
router.delete("/:id", todos_1.deleteTodo);
exports.default = router;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
// POST TO DO
router.post("/");
// GET TO DO
router.get("/");
// UPDATE A TO DO
router.patch("/:id");
// DELETE A TO DO
router.delete("/:id");
exports.default = router;

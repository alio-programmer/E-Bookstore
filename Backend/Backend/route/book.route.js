import express from "express";
import { addbooks, getBook } from "../controller/book.controller.js";

const router = express.Router();

router.get("/", getBook);
router.post("/addbook", addbooks);

export default router;
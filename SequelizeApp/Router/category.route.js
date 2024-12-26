import express from "express";
import { SaveInBulk, ViewCategory,deleteCategory } from "../Controller/category.controller.js";

const router = express.Router();

// http://localhost:3000/category/Save-in-Bulk
router.post("/Save-in-Bulk",SaveInBulk);

// http://localhost:3000/category/view
router.get("/view",ViewCategory);
// http://localhost:3000/category/delete
router.delete("/delete/:id", deleteCategory);

export default router;

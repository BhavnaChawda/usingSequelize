import express from "express";
import { SaveInBulk, viewProduct,editProduct,deleteProduct } from "../Controller/product.controller.js";

// import {verify} from "../middleware/authentic.js";
const router = express.Router();

// http://localhost:1000/product/SaveInBulk

router.post("/SaveInBulk", SaveInBulk);

// http://localhost:1000/product/view
router.get("/view",viewProduct);

//http://localhost:1000/product/delete
router.delete("/delete/:id", deleteProduct);  

//http://localhost:1000/product/edit-product
router.put("/edit-product/:id" , editProduct);

export default router; 

import express from "express";
import * as adminController from "../controllers/adminController.js";
import * as productController from "../controllers/productController.js";
const router = express.Router();

router.post("/login", adminController.login);
router.post("/save", adminController.save);
router.post("/create-product", productController.createProduct);

export default router;

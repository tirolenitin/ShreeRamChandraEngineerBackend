import express from "express";
import { indexController } from "../controllers/indexController.js";

const router = express.Router();

// auth
router.post("/login", indexController.adminController.login);
router.post("/save", indexController.adminController.save);

// product
router.post("/add-product", indexController.productController.addProduct);
router.get("/get-products", indexController.productController.getProducts);
router.get(
  "/get-product-details",
  indexController.productController.getProductById
);
router.put("/update-product", indexController.productController.updateProduct);
router.delete(
  "/delete-product",
  indexController.productController.deleteProduct
);
router.patch(
  "/add-to-featured",
  indexController.productController.updateIsFeatured
);
router.get(
  "/get-featured-products",
  indexController.productController.getFeaturedProducts
);

// faq
router.post("/add-faq", indexController.faqController.addFAQ);
router.get("/get-faqs", indexController.faqController.getFAQsByProductId);
router.get(
  "/get-faq-details",
  indexController.faqController.getFAQsByProductId
);
router.put("/update-faq", indexController.faqController.updateFAQ);
router.delete("/delete-faq", indexController.faqController.deleteFAQ);

export default router;

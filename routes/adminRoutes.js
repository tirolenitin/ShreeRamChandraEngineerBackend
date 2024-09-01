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


//caraosel 

router.post("/add-caraousel",indexController.caraoselController.addCarousel);
router.get("/get-caraousel",indexController.caraoselController.getCarousel);
router.patch("/update-caraousel/:id",indexController.caraoselController.updateCarousel);
router.delete("/delete-caraousel/:id",indexController.caraoselController.deleteCarousel);

//contact 

router.post("/save-contact", indexController.contactController.save)
router.get("/fetch-contact",indexController.contactController.fetch);
router.patch("/update-contact",indexController.contactController.update);

//upload image

router.post("/upload",indexController.uploadController.uploadSingleFile)

export default router;

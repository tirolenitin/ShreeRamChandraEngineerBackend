// controllers/productController.js
import Product from "../models/productModel.js";

// Add Product
export const addProduct = async (req, res) => {
  const productData = req.body;

  try {
    const product = await Product.create(productData);
    res.status(201).json({
      success: true,
      message: "Product Created Successfully",
      product,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get All Products
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({ success: true, products });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get Product by ID
export const getProductById = async (req, res) => {
  const { pid } = req.query;

  try {
    const product = await Product.findById(pid);
    if (!product) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }
    res.status(200).json({ success: true, product });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Update Product
export const updateProduct = async (req, res) => {
  const { pid } = req.query;
  const updates = req.body;

  try {
    const product = await Product.findByIdAndUpdate(pid, updates, {
      new: true,
    });
    if (!product) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }
    res.status(200).json({
      success: true,
      message: "Product updated successfully",
      product,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Delete Product
export const deleteProduct = async (req, res) => {
  const { pid } = req.query;

  try {
    const product = await Product.findByIdAndDelete(pid);
    if (!product) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }
    res
      .status(200)
      .json({ success: true, message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Update isFeatured Status
export const updateIsFeatured = async (req, res) => {
  const { pid, isFeatured } = req.query;

  try {
    const product = await Product.findByIdAndUpdate(
      pid,
      { isFeatured },
      { new: true }
    );
    if (!product) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }
    res.status(200).json({
      success: true,
      message: "Product status updated successfully",
      product,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get Featured Products
export const getFeaturedProducts = async (req, res) => {
  try {
    const featuredProducts = await Product.find({ isFeatured: true });
    res.status(200).json({ success: true, products: featuredProducts });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

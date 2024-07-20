import "../config/dbConnection.js";

import productModelSchema from "../models/productModel.js";

export const createProduct = async () => {
  const product = req.body;

  try {
    const product = productModelSchema.create(product);
    if (product) {
      res
        .status(201)
        .json({ success: true, message: "Product Address Successfully" });
    } else {
      res.status(500).json({ success: false, message: "failed" });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }
};

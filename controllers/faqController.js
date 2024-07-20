// controllers/faqController.js
import FAQ from "../models/faqModel.js";
import Product from "../models/productModel.js";

// Add FAQ
export const addFAQ = async (req, res) => {
  const { pid, question, answer } = req.body;

  try {
    // Verify if the product exists
    const product = await Product.findById(pid);
    if (!product) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }

    const faq = new FAQ({ productId: pid, question, answer });
    await faq.save();

    res
      .status(201)
      .json({ success: true, message: "FAQ added successfully", faq });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getFAQsByProductId = async (req, res) => {
  const { pid } = req.query;

  try {
    const product = await Product.findById(pid).select(
      "name price imgName grade condition usage minimumOrderQuantity paymentTerms"
    );
    if (!product) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }

    // Find FAQs related to the product
    const faqs = await FAQ.find({ productId: pid }).select(
      "question answer createdAt updatedAt"
    );

    // Combine product details with the FAQs
    const response = {
      product: product,
      faqs: faqs,
    };

    res.status(200).json({ success: true, data: response });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Update FAQ
export const updateFAQ = async (req, res) => {
  const { faqId } = req.params;
  const { question, answer } = req.body;

  try {
    const faq = await FAQ.findByIdAndUpdate(
      faqId,
      { question, answer, updatedAt: Date.now() },
      { new: true }
    );
    if (!faq) {
      return res.status(404).json({ success: false, message: "FAQ not found" });
    }
    res
      .status(200)
      .json({ success: true, message: "FAQ updated successfully", faq });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Delete FAQ
export const deleteFAQ = async (req, res) => {
  const { faqId } = req.params;

  try {
    const faq = await FAQ.findByIdAndDelete(faqId);
    if (!faq) {
      return res.status(404).json({ success: false, message: "FAQ not found" });
    }
    res
      .status(200)
      .json({ success: true, message: "FAQ deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

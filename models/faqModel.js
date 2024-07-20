// models/faqModel.js
import mongoose from "mongoose";

const Schema = mongoose.Schema;

const faqSchema = new Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  question: {
    type: String,
    required: true,
    trim: true,
  },
  answer: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Pre-save middleware to update the updatedAt field
faqSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

const FAQ = mongoose.model("FAQ", faqSchema);

export default FAQ;

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const faqSchema = new Schema({
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

module.exports = FAQ;

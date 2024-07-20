import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    imgName: {
      type: String,
      required: true,
      trim: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: String,
      required: true,
      trim: true,
    },
    minimumOrderQuantity: {
      type: String,
      required: true,
      trim: true,
    },
    grade: {
      type: String,
      required: true,
      trim: true,
    },
    condition: {
      type: String,
      required: true,
      trim: true,
    },
    usage: {
      type: String,
      required: true,
      trim: true,
    },
    size: {
      type: String,
      required: true,
      trim: true,
    },
    paymentTerms: {
      type: String,
      required: true,
      trim: true,
    },
    supplyAbility: {
      type: String,
      required: true,
      trim: true,
    },
    deliveryTime: {
      type: String,
      required: true,
      trim: true,
    },
    mainDomesticMarket: {
      type: String,
      required: true,
      trim: true,
    },
    productDescription: {
      type: String,
      required: true,
      trim: true,
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

// Indexes for better query performance
productSchema.index({ name: 1, price: 1 });

// Pre-save middleware to trim fields
productSchema.pre("save", function (next) {
  Object.keys(this._doc).forEach((key) => {
    if (typeof this[key] === "string") {
      this[key] = this[key].trim();
    }
  });
  next();
});

const Product = mongoose.model("Product", productSchema);

export default Product;

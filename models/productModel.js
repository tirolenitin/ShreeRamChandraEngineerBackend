import mongoose from "mongoose";

const productModel = mongoose.Schema({
  imgName: { type: String, required: true },
  name: { type: String, required: true },
  price: { type: String, required: true },
  minimumOrderQuantity: { type: String, required: true },
  grade: { type: String, required: true },
  condition: { type: String, required: true },
  usage: { type: String, required: true },
  size: { type: String, required: true },
  paymentTerms: { type: String, required: true },
  supplyAbility: { type: String, required: true },
  deliveryTime: { type: String, required: true },
  mainDomesticMarket: { type: String, required: true },
  productDescription: { type: String, required: true },
});

const productModelSchema = mongoose.model("products", productModel);

export default productModelSchema;

import mongoose from "mongoose";

const Schema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  boss: { type: mongoose.Schema.ObjectId, ref: "User", required: true },
  address: { type: String, required: true },
  clients: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "Company",
    },
  ],
  payments: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "Payment",
    },
  ],
  orders: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "Order",
    },
  ],
  products: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "Product",
    },
  ],
  financial: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "Financial",
    },
  ],
});

Schema.index({ name: 1 });
Schema.index({
  boss: 1,
});
Schema.index({
  name: 1,
  boss: 1,
});
const company = mongoose.model("Company", Schema) || mongoose.models.Company;

export default company;

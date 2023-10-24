import mongoose from "mongoose";

const Schema = new mongoose.Schema({
  name: { type: String, required: true },
  boss: { type: mongoose.Schema.ObjectId, ref: "User", required: true },
  dir: { type: String, required: true },
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
  Financial: [
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

export const model = mongoose.model("Company", Schema);

import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  customer: { type: mongoose.Schema.ObjectId, ref: "Customer", required: true },
  products: [
    {
      product: {
        type: mongoose.Schema.ObjectId,
        ref: "Product",
        required: true,
      },
      quantity: { type: Number, required: true },
    },
  ],
  totalAmount: { type: Number, required: true },
  status: {
    type: String,
    enum: ["Pending", "Shipped", "Delivered"],
    default: "Pending",
  },
  orderDate: { type: Date, default: Date.now },
  // Otros campos relacionados con el pedido, como dirección de envío, método de pago, etc.
});

export const Order = mongoose.model("Order", orderSchema);

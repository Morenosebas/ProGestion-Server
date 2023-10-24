import mongoose from "mongoose";

const Schema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  stock: { type: Number, default: 0 },
  category: { type: mongoose.Schema.ObjectId, ref: "Category" },
  supplier: { type: mongoose.Schema.ObjectId, ref: "Supplier" },
  company: {
    type: mongoose.Schema.ObjectId,
    ref: "Company",
  },
  clients: {
    type: mongoose.Schema.Types,
    ref: "User",
  },
  // Otros campos relevantes a los productos como imágenes, detalles técnicos, etc.
});

export const Product = mongoose.model("Product", Schema);

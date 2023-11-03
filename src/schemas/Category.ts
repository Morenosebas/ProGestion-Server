import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  company: {
    type: mongoose.Schema.ObjectId,
    required: true,
  },
  
  // Otros campos relevantes para las categorías de productos.
});

export const Category = mongoose.model("Category", categorySchema);
 
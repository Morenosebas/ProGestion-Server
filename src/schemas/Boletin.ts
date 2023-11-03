import mongoose from "mongoose";

const boletinSchema = new mongoose.Schema({
  type: { type: String, required: true }, // Puede ser "Sales", "Income", "Expenses", etc.
  fromDate: { type: Date, default: new Date() },
  toDate: { type: Date, default: new Date() },
  generatedBy: { type: mongoose.Schema.ObjectId, ref: "User", required: true }, // Usuario que generó el informe
  company: {
    type: mongoose.Schema.ObjectId,
    ref: "Company",
  },
  // Otros campos relevantes para los informes.
});

export const Boletin = mongoose.model("Boletin", boletinSchema);

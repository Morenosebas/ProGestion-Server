import mongoose from "mongoose";

const reportSchema = new mongoose.Schema({
  type: { type: String, required: true }, // Puede ser "Sales", "Income", "Expenses", etc.
  fromDate: Date,
  toDate: Date,
  generatedBy: { type: mongoose.Schema.ObjectId, ref: "User", required: true }, // Usuario que generó el informe
  company: {
    type:mongoose.Schema.ObjectId,
    
  },
  // Otros campos relevantes para los informes.
});

export const Report = mongoose.model("Report", reportSchema);

import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
  order: { type: mongoose.Schema.ObjectId, ref: "Order", required: true },
  amount: { type: Number, required: true },
  paymentDate: { type: Date, default: new Date() },
  paymentMethod: { type: String, enum: ["Efectivo", "Transferencia", "Otro"] }, // Puedes definir opciones específicas aquí, como "Tarjeta de crédito", "Transferencia bancaria", etc.
  // Otros campos relacionados con el pago, como detalles de transacción, estado del pago, etc.
  company: {
    type: mongoose.Schema.ObjectId,
    ref: "Company",
  },
  description: String,
});

export const Payment = mongoose.model("Payment", paymentSchema);

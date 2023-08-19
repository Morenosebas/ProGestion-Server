import mongoose from "mongoose";
import moongooseLocal from "passport-local-mongoose";
const Schema = new mongoose.Schema({
  name: String,
  cc: { type: Number, require: true, unique: true },
  username: { type: String, require: true, unique: true },
  type: { type: String, require: true, enum: ["Super", "Admin", "Staff"] },
  company: { type: String },
  password: String,
  permissions: {
    order_assortment: { type: Boolean, default: false },
    order_dispatch: { type: Boolean, default: false },
    see_orders: { type: Boolean, default: false },
    see_users: { type: Boolean, default: false },
    see_reports: { type: Boolean, default: false },
    see_old_orders: { type: Boolean, default: false },
    see_old_reports: { type: Boolean, default: false },
    delete_orders: { type: Boolean, default: false },
    create_liquidation: { type: Boolean, default: false },
    see_liquidation: { type: Boolean, default: false },
    see_caja: { type: Boolean, default: false },
    modify_stock: { type: Boolean, default: false },
  },
});

Schema.plugin(moongooseLocal, {
  usernameField: "username",
  passwordField: "password",
});

export const User = mongoose.models.User || mongoose.model("User", Schema);

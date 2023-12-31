import mongoose from "mongoose";
import moongooseLocal from "passport-local-mongoose";

enum UserType {
  Super = "Super",
  Admin = "Admin",
  Staff = "Staff",
}

interface Permissions {
  order_assortment: boolean;
  order_dispatch: boolean;
  see_orders: boolean;
  see_users: boolean;
  see_reports: boolean;
  see_old_orders: boolean;
  see_old_reports: boolean;
  delete_orders: boolean;
  create_liquidation: boolean;
  see_liquidation: boolean;
  see_caja: boolean;
  modify_stock: boolean;
}

interface UserModel extends mongoose.Schema {
  name: string;
  cc: string;
  username: string;
  type: UserType;
  company: string | null;
  password: string;
  permissions: Permissions;
}
const Schema = new mongoose.Schema({
  name: { type: String, required: true },
  cc: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  type: { type: String, required: true, enum: ["Super", "Admin", "Staff"] },
  company: [{ type: mongoose.Schema.ObjectId, ref: "Company", default: null }],
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
Schema.plugin(moongooseLocal);
export const User = mongoose.model("User", Schema);

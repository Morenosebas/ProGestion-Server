import type { Request, Response, NextFunction } from "express";
import { handleError } from "@/helpers/ErrorHandler/Error";
import { User } from "@/schemas/User";
async function createAdmin(req: Request, res: Response, Next: NextFunction) {
  try {
    const user = await User.findOne({ type: "Super" });
    if (!user) {
      await User.register(
        {
          name: "SuperAdmin",
          username: "superAdmin",
          email: req.body.email,
          cc: req.body.cc,
          type: req.body.type,
        },
        "admin123"
      );
    }
  } catch (err) {
    if (err instanceof Error) return handleError(err, res);
  }
}

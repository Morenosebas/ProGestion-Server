import express, { NextFunction, Request, Response } from "express";
import passport from "passport";
import { User } from "../schemas/User";
const router = express.Router();

router
  .post(
    "login",
    passport.authenticate("local", { failWithError: true }),
    async (req: Request, res: Response) => {
      res.redirect("/api/user");
    },
    (err: Error, req: Request, res: Response, next: NextFunction): void => {
      res.status(401).json({
        error: "Usuario o contrasena incorrectos.",
        message: err.message,
      });
    }
  )
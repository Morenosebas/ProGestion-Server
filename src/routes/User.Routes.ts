import express, { NextFunction, Request, Response } from "express";
import passport from "passport";
import { User } from "../schemas/User";
const router = express.Router();

router
  .post(
    "/signin",
    passport.authenticate("local", { failWithError: true }),
    async (req: Request, res: Response) => {
      res.status(200).json({ message: "Usuario logueado con exito." });
    },
    (err: Error, req: Request, res: Response, next: NextFunction): void => {
      const date = new Date();
      console.error(`[${date.toLocaleString()}] ${err.stack}`);
      res.status(401).json({
        error: "Credenciales incorrectas.",
        message: err.message,
      });
    }
  )
  .post("/signup", async (req: Request, res: Response) => {
    try {
      await User.register(
        new User({
          name: req.body.name,
          username: req.body.username,
          email: req.body.email,
          cc: req.body.cc,
          type: "Super",
        }),
        req.body.password
      );
      // res.redirect("/api/user");
      res.status(200).json({ message: "Usuario creado con exito." });
    } catch (err: any) {
      console.error(err);
      res.status(401).json({
        error: "Usuario o contrasena existentes.",
        message: err.message,
      });
    }
  });

module.exports = router;

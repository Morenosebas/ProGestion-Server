import express, { NextFunction, Request, Response } from "express";
import { createCompany } from "@controllers/company/CompanyController";

const router = express.Router();

router.post("/create", createCompany);
router.get("/", (req: Request, res: Response) => {
  res.send("Company routes");
});
module.exports = router;

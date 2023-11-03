import company from "@schemas/Company";
import type { Request, Response } from "express";
import { handleError } from "@helpers/ErrorHandler/Error";

export async function createCompany(req: Request, res: Response) {
  try {
    const { name, boss, address } = req.body;
    if (!name || !boss || !address) {
      throw new Error(
        "Toda compañía debe tener un nombre, un jefe y una dirección."
      );
    }
    const newCompany = await company.create({
      name,
      boss,
      address,
    });
    return res.json(newCompany);
  } catch (error) {
    if (error instanceof Error) {
      return handleError(error, res);
    }
  }
}

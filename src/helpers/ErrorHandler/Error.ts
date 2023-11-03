import type { Response } from "express";
export function handleError(error: Error, res: Response) {
  console.log(error.message);
  return res.status(500).json({ error: error.message });
}

class CustomError extends Error {
  constructor(message: string, public statusCode: number) {
    super(message);
  }
}

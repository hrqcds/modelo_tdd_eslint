/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response, NextFunction } from "express";
import { AppError } from "@shared/errors/AppError";

export function ErrorMiddleware(
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction,
): Response {
    if (err instanceof AppError) {
        return res.status(err.statusCode).json({
            status: "error",
            message: err.message,
        });
    }

    return res
        .status(500)
        .json({ status: "error", message: "internal server error" });
}

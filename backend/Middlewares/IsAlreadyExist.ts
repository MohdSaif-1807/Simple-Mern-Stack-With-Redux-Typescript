import AuthenticationModel from "../models/AuthenticationModel";
import { Request, Response, NextFunction } from "express";
export const IsAlreadyExist = async (req: Request, res: Response, next: NextFunction) => {
    const { firstName, lastName, email, password } = req.body;
    const data = await AuthenticationModel.findOne({ email: email });
    if (data) {
        res.status(400).json({
            message: "email already exists!!!"
        })
    }
    else {
        next();
    }
}
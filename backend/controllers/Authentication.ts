import { Request, Response } from "express";
import AuthenticationModel from "../models/AuthenticationModel";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

async function comparePasswords(plainTextPassword: string, hashedPassword: string): Promise<boolean> {
    try {
        const match = await bcrypt.compare(plainTextPassword, hashedPassword);
        console.log(match);
        return match;
    } catch (error) {
        console.error('Error comparing passwords:', error);
        throw error;
    }
}
export const Registration = async (req: Request, res: Response) => {
    const { firstName, lastName, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const Register = new AuthenticationModel({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: hashedPassword
    });
    await Register.save();
    res.status(200).json({
        message: "Registration Sucessfull",
        Register
    })
}

export const Login = async (req: Request, res: Response) => {
    console.log("entered!!");
    const { email, password } = req.body;
    console.log(email + " " + password);
    try {
        const data = await AuthenticationModel.findOne({ email: email });
        if (data) {
            console.log(data);
            console.log(await comparePasswords(password, data.password.toString()));
            if (await comparePasswords(password, data.password.toString())) {
                const token = await jwt.sign({ _id: data._id }, process.env.JWT_SECRET ?? "");
                console.log(token);
                res.status(200).cookie("token", token, {
                    secure: true,
                    maxAge: 90 * 24 * 60 * 60 * 1000,
                }).json({
                    success: true,
                    message: "Login successfull!!",
                    data,
                    jwt_token: token
                });

            }
            else {
                console.log("error hogya");
                res.status(400).json({
                    message: "error!! invalid credentials"
                })
            }
        }
        else {
            res.status(400).json({
                message: "error! no data found for the following email"
            })
        }
    }
    catch (err) {
        console.log("something went wrong!!");
        console.log(err);
    }
}

export const Logout = async (req: Request, res: Response) => {
    try {
        res
            .status(200)
            .clearCookie("token")
            .json({
                message: "Logout done!",
            });
    } catch (error) {
        console.log(error);
    }
};
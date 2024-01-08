import mongoose from "mongoose";
import { AuthenticationInterface } from "../Interfaces/AuthenticationInterface";

const authenticationSchema = new mongoose.Schema<AuthenticationInterface>({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

const AuthenticationModel = mongoose.model<AuthenticationInterface>("AuthenticationModel", authenticationSchema);
export default AuthenticationModel;
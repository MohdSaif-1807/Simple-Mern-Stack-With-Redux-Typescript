import express from "express";
import { Login, Logout, Registration } from "../controllers/Authentication";
import { IsAlreadyExist } from "../Middlewares/IsAlreadyExist";
const AuthenticationRoute = express.Router();
AuthenticationRoute.post("/register", IsAlreadyExist, Registration);
AuthenticationRoute.post("/login", Login);
AuthenticationRoute.post("/logout", Logout);
export default AuthenticationRoute;


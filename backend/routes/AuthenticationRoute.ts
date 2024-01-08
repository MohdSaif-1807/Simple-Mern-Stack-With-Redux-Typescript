import express from "express";
import { Login, Logout, Registration } from "../controllers/Authentication";
const AuthenticationRoute = express.Router();
AuthenticationRoute.post("/register", Registration);
AuthenticationRoute.post("/login", Login);
AuthenticationRoute.post("/logout", Logout);
export default AuthenticationRoute;


import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import AuthenticationRoute from "../routes/AuthenticationRoute";
import DataFetchingRoutes from "../routes/DataFetchingRoutes";
import cookieParser from "cookie-parser";


const app = express();
dotenv.config({ path: "./.env" });
app.use(cookieParser());
app.use(express.json());
app.use(cors({}));
mongoose.connect(process.env?.MONGO_URL ?? "").then(() => {
    console.log("database successfully connected!!");
}).catch((err) => {
    console.log("connection failed!!" + err);
})

app.use("/api/authentication", AuthenticationRoute);
app.use("/api/data", DataFetchingRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Backend Server is Running on ${process.env.PORT}`);
});

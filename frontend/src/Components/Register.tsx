import { Box, Button, Grid, Stack, TextField, Typography } from "@mui/material";
import rename_2 from '../Images/rename_2.gif';
import "@fontsource/poppins";
import "../App.css";
import styled from "@emotion/styled";
import { z, ZodType } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import axios from "axios";

interface FormData {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    confirmPassword: string
};

const CustomButton = styled(Button)({
    marginTop: "20px",
    fontFamily: "poppins",
    fontWeight: "bold",
    backgroundColor: "#FF5B31",
    color: "white",
    borderRadius: "40px",
    width: "180px",
    height: "55px",
    '&:hover': {
        backgroundColor: "white",
        color: "black"
    }
}) as typeof Button;


const CustomTextFeild = styled(TextField)({
    marginTop: "20px",
    width: "380px",
    backgroundColor: "grey",
    fontColor: "white",
    borderRadius: "40px"
}) as typeof TextField;



const inputStyle = { color: "white", WebkitBoxShadow: "0 0 0 1000px grey inset", borderRadius: "40px", fontFamily: 'poppins', fontWeight: 'bold' };

export const Register = () => {
    const schema: ZodType<FormData> = z
        .object({
            firstName: z.string().min(2).max(30),
            lastName: z.string().min(2).max(30),
            email: z.string().email(),
            password: z.string().min(5).max(20),
            confirmPassword: z.string().min(5).max(20),
        })
        .refine((data) => data.password === data.confirmPassword, {
            message: "Passwords do not match",
            path: ["confirmPassword"],
        });
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(schema),
    });
    const navigate = useNavigate();
    const submitData = async (data: FormData) => {
        console.log("IT WORKED", data);
        await axios.post("https://gamezone-backend.onrender.com/api/authentication/register", data).
            then((res) => {
                console.log(res.data);
                console.log("Registration success");
                navigate("/login");
            })
            .catch((err) => {
                console.log(err);
            })
    };
    return (
        <>
            <Stack direction={"column"}
                alignItems={"center"}
                spacing={2}
                sx={{
                    paddingTop: "2%"
                }}
            >
                <Box sx={{ flexGrow: "1", backgroundColor: "black", width: "1000px", height: "580px", borderRadius: "40px" }}>
                    <Grid container spacing={2} sx={{ marginLeft: "33px" }}>
                        <Grid item xs={5} sx={{ borderRadius: "40px", marginTop: "25px" }}>
                            <Typography sx={{ fontFamily: "poppins", color: "white", fontSize: "40px" }}>Create </Typography>
                            <Typography sx={{ fontFamily: "poppins", color: "white", fontSize: "40px" }}>your account</Typography>
                            <br />
                            <Typography sx={{ fontFamily: "poppins", color: "white", display: "inline" }}>Already a member? </Typography>
                            <a href="/login" className={"loginStyles"}>Login</a>
                            <br />
                            <br />
                            <TextField size="small" placeholder="first name" label="first name" {...register("firstName")} sx={{ width: "180px", color: "white", backgroundColor: "grey", fontColor: "white", borderRadius: "40px" }} inputProps={{ style: inputStyle }} InputProps={{ sx: { '&:focus-within fieldset, &:focus-visible fieldset': { border: '4px solid white!important', borderRadius: "40px" } } }}></TextField>
                            {errors.firstName && <span className={"Message"}> {errors.firstName.message}</span>}
                            <TextField size="small" placeholder="last name" label="last name" {...register("lastName")} sx={{ marginLeft: "20px", width: "180px", fontWeight: "bold", fontFamily: "poppins", color: "white", backgroundColor: "grey", fontColor: "white", borderRadius: "40px" }} inputProps={{ style: inputStyle }} InputProps={{ sx: { '&:focus-within fieldset, &:focus-visible fieldset': { border: '4px solid white!important', borderRadius: "40px" } } }}></TextField>
                            {errors.lastName && <span className={"Message"}> {errors.lastName.message}</span>}
                            <CustomTextFeild size="small" placeholder="E mail" label="E mail" {...register("email")} inputProps={{ style: inputStyle }} InputProps={{ sx: { '&:focus-within fieldset, &:focus-visible fieldset': { border: '4px solid white!important', borderRadius: "40px" } } }} inputMode="email"></CustomTextFeild>
                            {errors.email && <span className={"Message"}> {errors.email.message}</span>}
                            <TextField size="small" placeholder="password" label="password" type={"password"} {...register("password")} sx={{ marginTop: "20px", width: "380px", color: "white", backgroundColor: "grey", fontColor: "white", borderRadius: "40px" }} inputProps={{ style: inputStyle }} InputProps={{ sx: { '&:focus-within fieldset, &:focus-visible fieldset': { border: '4px solid white!important', borderRadius: "40px" } } }}></TextField>
                            {errors.password && <span className={"Message"}> {errors.password.message}</span>}
                            <TextField size="small" placeholder="confirm password" label="confirm password" {...register("confirmPassword")} type={"password"} sx={{ marginTop: "20px", width: "380px", color: "white", backgroundColor: "grey", fontColor: "white", borderRadius: "40px" }} inputProps={{ style: inputStyle }} InputProps={{ sx: { '&:focus-within fieldset, &:focus-visible fieldset': { border: '4px solid white!important', borderRadius: "40px" } } }}></TextField>
                            {errors.confirmPassword && (<span className={"Message"}> {errors.confirmPassword.message}</span>)}
                            <br />
                            <CustomButton onClick={handleSubmit(submitData)}>Create account</CustomButton>
                        </Grid>
                        <Grid item xs={7}>
                            <img src={rename_2} alt="this is " className={"imageTemp"} />
                        </Grid>
                    </Grid>
                </Box>
            </Stack >
        </>
    )
}
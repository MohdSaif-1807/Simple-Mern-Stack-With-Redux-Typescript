import { Box, Button, Grid, Stack, TextField, Typography } from "@mui/material";
import React, { useContext } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import rename_2 from '../Images/rename_2.gif';
import { useState, useEffect } from "react";
import "@fontsource/poppins";
import "../App.css";
import styled from "@emotion/styled";
import { RootState } from "../Store";
import { useNavigate } from "react-router-dom";
import { login } from "../Actions/Authentication";
import { fetchAllCharactersData } from "../Actions/Fetching";
import { AppContext } from "../AppContext";

const CustomButton = styled(Button)({
    marginTop: "30px",
    fontFamily: "poppins",
    fontWeight: "bold",
    backgroundColor: "#FF5B31",
    color: "white",
    borderRadius: "40px",
    width: "180px",
    height: "60px",
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
export const Login = () => {
    const [email, setEmail] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch<ThunkDispatch<RootState, undefined, AnyAction>>();
    const isAuthenticated = useSelector((state: RootState) => state?.user.isAuthenticated);
    const [password, setPassword] = useState("");
    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log(email + " " + password);
        await dispatch(login(email, password));
        await dispatch(fetchAllCharactersData());
        console.log(isAuthenticated);
    }
    useEffect(() => {
        if (isAuthenticated) {
            navigate("/");
        }
        else {
            navigate("/login");
        }
    }, [isAuthenticated]);

    return (
        <>
            <Stack direction={"column"}
                alignItems={"center"}
                spacing={2}
                sx={{
                    paddingTop: "6%"
                }}
            >
                <Box sx={{ flexGrow: "1", backgroundColor: "black", width: "1000px", height: "520px", borderRadius: "40px" }}>
                    <Grid container spacing={2} sx={{ marginRight: "40px" }}>
                        <Grid item xs={7}>
                            <img src={rename_2} alt="this is " className={"imageTempLogin"} />
                        </Grid>
                        <Grid item xs={5} sx={{ borderRadius: "40px", marginTop: "35px" }}>
                            <Typography sx={{ fontFamily: "poppins", color: "white", fontSize: "40px" }}>Get </Typography>
                            <Typography sx={{ fontFamily: "poppins", color: "white", fontSize: "40px" }}>Started</Typography>
                            <br />
                            <Typography sx={{ fontFamily: "poppins", color: "white", display: "inline" }}>Don't have an account? </Typography>
                            <a href="/register" className={"loginStyles"}>Register</a>
                            <br />
                            <br />
                            <CustomTextFeild value={email} onChange={(e) => { setEmail(e.target.value) }} size="small" placeholder="E mail" label="E mail" inputProps={{ style: inputStyle }} InputProps={{ sx: { '&:focus-within fieldset, &:focus-visible fieldset': { border: '4px solid white!important', borderRadius: "40px" } } }} inputMode="email"></CustomTextFeild>
                            <TextField value={password} onChange={(e) => { setPassword(e.target.value) }} size="small" placeholder="password" label="password" type={"password"} sx={{ marginTop: "20px", width: "380px", color: "white", backgroundColor: "grey", fontColor: "white", borderRadius: "40px" }} inputProps={{ style: inputStyle }} InputProps={{ sx: { '&:focus-within fieldset, &:focus-visible fieldset': { border: '4px solid white!important', borderRadius: "40px" } } }}></TextField>
                            <CustomButton onClick={(e) => handleSubmit(e)}>Login</CustomButton>
                        </Grid>
                    </Grid>
                </Box>
            </Stack>
        </>
    )
}
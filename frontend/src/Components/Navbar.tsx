import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import React from "react";
import { AnyAction } from 'redux';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from "../Store";
import { ThunkDispatch } from 'redux-thunk';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Logout } from '../Actions/Authentication';
export default function Navbar() {
    const dispatch = useDispatch<ThunkDispatch<RootState, undefined, AnyAction>>();
    const isAuthenticated = useSelector((state: RootState) => state.user.isAuthenticated);
    const navigate = useNavigate();
    const handleLogout = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        dispatch(Logout());
        console.log("logout successfull!!");
    }
    useEffect(() => {
        console.log(isAuthenticated);
        isAuthenticated ? navigate("/") : navigate("/login");
    }, [isAuthenticated])

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundColor: "black", marginTop: "1px" }}>
                <Toolbar>
                    <Typography variant="h5" component="div" sx={{ flexGrow: 1, fontFamily: "poppins", fontWeight: "bold" }}>
                        Dragon Ball Z
                    </Typography>
                    <Button onClick={(e) => handleLogout(e)} color="inherit" sx={{ fontFamily: "poppins", fontWeight: "bold" }}>Logout</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
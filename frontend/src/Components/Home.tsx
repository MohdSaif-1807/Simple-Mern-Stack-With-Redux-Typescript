import Navbar from "./Navbar"
import { Box, Button, CardActions, Grid, Stack, Typography } from "@mui/material";
import { DataSet } from "../Reducers/Data";
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import "@fontsource/poppins";
import "../App.css";
import { RootState } from "../Store";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../AppContext";
import { useContext, useEffect, useState } from "react";
import { ModalComponent } from "./ModalComponent";

import styled from "@emotion/styled";
import { fetchAllCharactersData, fetchSpecificCharacterData } from "../Actions/Fetching";

const CustomStyleButton = styled(Button)({
    fontFamily: "poppins",
    fontWeight: "bold",
    backgroundColor: "#FF5B31",
    color: "white",
    borderRadius: "20px",
    '&:hover': {
        backgroundColor: "white",
        color: "black"
    }
}) as typeof Button;



export const Home = () => {
    const { setOpen, setIndex } = useContext(AppContext);
    const [characters, setCharacters] = useState<DataSet[]>([]);
    const navigate = useNavigate();
    const dispatch = useDispatch<ThunkDispatch<RootState, undefined, AnyAction>>();
    const isAuthenticated = useSelector((state: RootState) => state.user.isAuthenticated);
    const data = useSelector((state: RootState) => state.data.data);
    const charData = useSelector((state: RootState) => state.data_brief.data_brief);
    useEffect(() => {
	dispatch(fetchAllCharactersData());
        if (isAuthenticated) {
            navigate("/");
            console.log(data);
            setCharacters(data);
        }
        else {
            navigate("/login");
        }
    }, [dispatch]);
    return (
        <>
            <Navbar />
            <ModalComponent />
            <Stack direction={"column"} spacing={5} sx={{ marginTop: "50px" }}>
                <Box sx={{ flexGrow: "5" }}>
                    <Grid container spacing={5}>
                        {
                            characters.map((data: DataSet, ind: number) => (
                                <Grid item>                                    <Card sx={{ maxWidth: 345 }}>
                                    <CardMedia component="img" height="200" src={data.Image} alt="green iguana" />
                                    <CardContent sx={{ backgroundColor: "black" }}>
                                        <Typography gutterBottom variant="h5" component="div" sx={{ color: "white", fontFamily: "poppins", fontWeight: "bold" }}>
                                            {data.Name}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" sx={{ color: "white", fontFamily: "poppins", fontWeight: "bold" }}>
                                            {data.Description}
                                        </Typography>
                                    </CardContent>
                                    <CardActions sx={{ backgroundColor: "black", justifyContent: "center", justifyItems: "center", alignContent: "center", alignItems: "center" }}>
                                        <CustomStyleButton onClick={async () => { setIndex(ind); await dispatch(fetchSpecificCharacterData(ind)); console.log("char DAta"); console.log(charData); setOpen(true); }}>Know More </CustomStyleButton>
                                    </CardActions>
                                </Card>
                                </Grid>
                            ))
                        }
                    </Grid>
                </Box>
            </Stack>
        </>
    )
}
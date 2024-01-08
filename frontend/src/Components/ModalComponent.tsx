import { Box, Grid, Modal, Typography } from "@mui/material"
import { useContext, useEffect, useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import { AppContext } from "../AppContext";
import characterbrief from "../Data/characterbrief.json";
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { RootState } from "../Store";
import { AnyAction } from 'redux';
import { fetchSpecificCharacterData } from "../Actions/Fetching";
import { DataSetBrief } from "../Reducers/SpecificData";
const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    height: 500,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
interface CharacterBrief {
    sno: number,
    ImageUrl: string,
    Name: string,
    Game: string,
    Description: string
}

export const ModalComponent = () => {
    const { open, setOpen, index } = useContext(AppContext);
    const dispatch = useDispatch<ThunkDispatch<RootState, undefined, AnyAction>>();
    const data = useSelector((state: RootState) => state.data_brief.data_brief);
    const [DataToMap, setDataToMap] = useState<DataSetBrief>();
    useEffect(() => {
        dispatch(fetchSpecificCharacterData(Number(index)));
        setDataToMap(data);
    }, [open, index])

    return (
        <>
            <Modal open={Boolean(open)}>
                <Box sx={style}>
                    <Grid container direction="row" justifyContent="space-between" alignItems="center">
                        <Grid item>
                            <Typography variant="h4" component="h2" sx={{ fontFamily: "poppins", fontWeight: "bold" }}>{DataToMap?.Name} ( {DataToMap?.Game} )</Typography>
                        </Grid>
                        <Grid item>
                            <CloseIcon sx={{ backgroundColor: "red", color: "white", marginBottom: "40px" }} onClick={() => { setOpen(false) }} />
                        </Grid>
                    </Grid>
                    <div>
                        <img src={DataToMap?.ImageUrl} width="100%" height="200" alt="try" />
                    </div>
                    <Typography sx={{ mt: 2, fontFamily: "poppins", fontWeight: "bold" }}>
                        {DataToMap?.Description}
                    </Typography>
                </Box>
            </Modal>
        </>
    )
}
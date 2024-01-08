import express from "express";
import { FetchAllCharactersData, FetchSpecificCharacterData } from "../controllers/DataFetching";
const DataFetchingRoutes = express.Router();
DataFetchingRoutes.get("/characters", FetchAllCharactersData);
DataFetchingRoutes.get("/characterbrief/:id", FetchSpecificCharacterData);
export default DataFetchingRoutes;


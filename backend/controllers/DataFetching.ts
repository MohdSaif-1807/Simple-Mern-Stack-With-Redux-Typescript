import { CharactersBriefModel } from "../models/CharactersBriefModel";
import { CharacterModel } from "../models/CharactersModel";
import { Request, Response } from "express";
export const FetchAllCharactersData = async (req: Request, res: Response) => {
    const data = await CharacterModel.find({});
    await res.status(200).json({
        data
    })
}

export const FetchSpecificCharacterData = async (req: Request, res: Response) => {
    const id = await Number(req.params.id);
    const data = await CharactersBriefModel.findOne({ sno: id });
    // console.log(data);
    await res.status(200).json({
        data
    })
}
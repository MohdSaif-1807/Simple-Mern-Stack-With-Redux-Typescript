import mongoose from "mongoose";
const charactersBriefSchema = new mongoose.Schema({
    sno: {
        type: Number,
        required: true
    },
    ImageUrl: {
        type: String,
        required: true
    },
    Name: {
        type: String,
        required: true
    },
    Game: {
        type: String,
        required: true
    },
    Description: {
        type: String,
        required: true
    }
})
export const CharactersBriefModel = mongoose.model("characterbrief", charactersBriefSchema);
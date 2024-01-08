import mongoose from "mongoose";
const characterModelSchema = new mongoose.Schema({
    Image: {
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
export const CharacterModel = mongoose.model("characters", characterModelSchema);
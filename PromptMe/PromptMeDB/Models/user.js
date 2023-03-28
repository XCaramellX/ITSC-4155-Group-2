import mongoose from "mongoose";

const Schema  = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true, 
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max: 64,
    },
    category: {
        type: String,
        default: " ",
        required: true,
    },
    experience: {
        type: String,
        default: " ",
        required: true,
    },
    Prompt: {
        type: String,
        default: ""
    }
},
{ timestamps: true }
);
export default mongoose.model("User", userSchema);
import mongoose from "mongoose";

const Schema  = mongoose.Schema;

const prompts = new Schema ({
    category: {
        type: String,
        required: true
    },
    experience: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }

   

});

export default mongoose.model("Prompts", prompts)
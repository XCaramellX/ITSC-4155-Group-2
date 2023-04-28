import mongoose from "mongoose";

const Schema  = mongoose.Schema;

const prompts = new Schema ({
    content: {
        type: String,
        required: true
    }

   

});

export default mongoose.model("Prompts", prompts)
import mongoose from "mongoose";
const { Schema } = mongoose;

const images = new Schema(
    {
       user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
       },

       id: {
            type: String,
            required: true,
       },

       url: {
            type: String,
            required: true
       }
        
    }
)
export default mongoose.model("Image", images);

import mongoose from "mongoose";
const { Schema } = mongoose;

const images = new Schema(
    {
        image: 
            {
                url: '',
                id: '',
                user: '',
                private: false,
            }, 

        likes:
            {
                type: Number,
            },

        comments: {
            type: String,
            username: String,
            userAt: String
        }
    }
)
export default mongoose.model("Image", postSchema);
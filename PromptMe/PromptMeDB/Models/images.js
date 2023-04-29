import mongoose from "mongoose";
const { Schema } = mongoose;

const images = new Schema(
    {
        image: [
            {
                url: '',
                id: '',
                user: '',
                private: false,
            }
        ]
    }
)
export default mongoose.model("Image", postSchema);

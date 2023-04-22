import mongoose from "mongoose";
const { Schema } = mongoose;

const postSchema = new Schema(
    {
        image: [
            {
                url: '',
                id: '',
                user: '',
                private: false,
            }
        ],
        comments: [
            {
                type: String,
                username: String,
                userAt: String
            }
        ],
        likes: [
            {
                type: Number,
                username: String,
                userAt: String
            }
        ]
    }
)
export default mongoose.model("Post", postSchema);

import mongoose from "mongoose";
const { Schema } = mongoose;

const comments = new Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
           }, 
           
        image: 
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Image'
            }, 


        commentText: {
            type: String
        }

}

)
export default mongoose.model("Comment", comments);
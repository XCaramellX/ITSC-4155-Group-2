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
       },

       prompt: {
         type: String,
         required: true
       },

      likes: {
          type: Number,
          default: 0
       },

       dislikes: {
          type: Number,
          default: 0
       },

       likedBy: [
         {
            type: Schema.Types.ObjectId, ref: "User"
         }
      ],

       dislikedBy: [
         {
            type: Schema.Types.ObjectId, ref: "User"
         }
      ],
     
       comments: [
          {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Comment'
          }
       ] 
     
    }
)
export default mongoose.model("Image", images);

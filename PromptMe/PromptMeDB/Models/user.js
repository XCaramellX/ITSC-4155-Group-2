import mongoose from "mongoose";
const { Schema } = mongoose;
const userSchema = new Schema(
    {
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
            default: "none",
        },
        experience: {
            type: String,
            default: "none",
        },
        image: {
            public_id: "",
            url: "",
        },
        resetCode: "",
    },
    { timestamps: true }
);
export default mongoose.model("User", userSchema);
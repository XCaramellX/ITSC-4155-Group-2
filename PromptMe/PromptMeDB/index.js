import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import morgan from 'morgan';


import authRoutes from './routes/auth.js';


dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

mongoose
    .connect(process.env.DB_URI)
    .then(() => console.log("DB connected"))
    .catch((err) => console.log("DB CONNECTION ERROR: ", err));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("dev"));

app.use("/api", authRoutes);


app.get('/', (req, res) => {
    res.json({ success: true, message: 'Database Connected' })
})

app.post('/api/upload-image', async(req, res) => {
    const {image} = req.body;

    try {
        const result = await cloudinary.uploader.upload(image, {
            upload_preset: "ml_default",
        });

        const newUserImage = new ImageModel({url: result.secure_url});
        await newUserImage.save();

        res.status(201).json({url: result.secure_url, id: newUserImage._id});
    } catch (error) {
        res.status(500).json({error: error.message});
    }
})

app.listen(PORT, () => {console.log(`Server running on port ${PORT}`)});






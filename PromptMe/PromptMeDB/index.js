import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import morgan from 'morgan';


import authRoutes from './routes/auth.js';
import { uploadImage } from './API/auth.js';
import User from './Models/user.js';
import Image from './Models/images.js';


dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

mongoose
    .connect(process.env.DB_URI)
    .then(() => console.log("DB connected"))
    .catch((err) => console.log("DB CONNECTION ERROR: ", err));


app.use(express.json({ limit: "50mb"}));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(cors());
app.use(morgan("dev"));

app.use("/api", authRoutes);


app.get('/', (req, res) => {
    res.json({ success: true, message: 'Database Connected' })
})

app.post('/api/upload-image', async(req, res) => {
  
    await uploadImage(req, res);
    res.status(400).json({error: "Image did not upload"});
    
})

app.get('/api/showImages', async(req, res) => {
    const imagePost = await Image.find();
    res.status(200).json(imagePost);
    res.status(400).json({error: error.message});
});


app.get('/api/users', async(req, res) => {
    const user = await User.find()
    res.status(200).json(user);
}); 

app.get('/api/imagePrompt/:imageId', async (req, res) => {

    const {imageId} = req.params
    
    const userImage = await Image.findById(imageId).populate('user');
    res.status(200).json({userImage, prompt: userImage.user.prompt});
})

app.listen(PORT, () => {console.log(`Server running on port ${PORT}`)});






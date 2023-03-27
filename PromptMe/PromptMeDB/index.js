import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import morgan from 'morgan';

import authRoutes from './routes/auth.js';

dotenv.config();



const app = express();

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
    res.json({ success: true, message: 'Port Running on server 8000' })
})


const server = app.listen(8000, () => {console.log("Server running on port 8000")});

// Handle unhandled rejections

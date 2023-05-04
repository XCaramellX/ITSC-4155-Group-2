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


app.use(express.json({ limit: "50mb"}));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(cors());
app.use(morgan("dev"));

app.use("/api", authRoutes);


app.get('/', (req, res) => {
    res.json({ success: true, message: 'Database Connected' })
})

app.listen(PORT, () => {console.log(`Server running on port ${PORT}`)});






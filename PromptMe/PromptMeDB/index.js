const express = require("express");
require('dotenv').config();
const mongoose = require("mongoose");
const cors = require("cors");


const morgan = require("morgan");

const app = express();

mongoose
    .connect(process.env.DB_URI)
    .then(() => console.log("DB connected"))
    .catch((err) => console.log("DB CONNECTION ERROR: ", err));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("dev"));

app.get('/', (req, res) =>{
    res.send('<h1 style="color:green;">Port running</h1>');
});

app.listen(8000, () => console.log("Server running on port 8000"));
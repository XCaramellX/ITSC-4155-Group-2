import express from 'express';

const router = express.Router();

// Controllers
import { signup, signin, forgotPassword, resetPassword, promptSelected, uploadImage } from "../API/auth.js";
import Prompts from "../Models/prompts.js";

router.get("/", (req, res) => {
    return res.json({
        data: "Hello from the API"
    });
});

router.post("/signup", signup);
router.post("/signin", signin);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);
router.get("/prompts", (req, res) => {
    
    Prompts.find({ })
        .then((data) => {

            console.log('Data: ', data)
            return res.json(data);
        }) 
        .catch((error) => {
            console.log(error);
        });
});
router.post("/prompts", promptSelected);
router.post("/upload-image", uploadImage)


export default router;
import express from 'express';

const router = express.Router();

// Controllers
import { signup, signin, forgotPassword, resetPassword } from "../controllers/auth.js";
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
router.get("/getprompts", (req, res) => {
   
    const prompts = Prompts.find({ })
        .then((data) => {
            console.log('Data: ', data);
            res.json(data);
        })
        .catch((error) => {
            console.log(error);
        });
});

export default router;
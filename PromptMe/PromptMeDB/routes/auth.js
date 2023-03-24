import express from 'express';

const router = express.Router();

// Controllers
import { signup, signin, forgotPassword, resetPassword} from "../controllers/auth.js";

router.get("/", (req, res) => {
    return res.json({
        data: "Hello from the API"
    });
});

router.post("/signup", signup);
router.post("/signin", signin);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);

export default router;
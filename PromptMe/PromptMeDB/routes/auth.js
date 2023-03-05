import  express from "express";

const router = express.Router();

// Controllers
const { signup, signin, forgotPassword, resetPassword} = require("../controllers/auth");

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
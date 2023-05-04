import express from 'express';

const router = express.Router();


// Controllers
import { signup, signin, forgotPassword, resetPassword, promptSelected, uploadImage} from "../API/auth.js";
import Prompts from "../Models/prompts.js";
import Image from "../Models/images.js";
import User from "../Models/user.js"


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

router.get("/showImages", (req, res) =>{
    Image.find({ })
        .then((data) => {

            console.log('Data: ', data)
            return res.json(data);
        }) 
        .catch((error) => {
            console.log(error);
        });
}) 


router.post("/prompts", promptSelected);
router.post("/upload-image", uploadImage);

router.get('/showImages/:imageId', (req, res) => {
    const {imageId} = req.params
    Image.findById(imageId)
    .then((data) => {
        console.log('Data: ', data);
        return res.json(data);
    })
    .catch((error) => {
        console.log(error);
    });
    
}) 

router.get('/userprompt', (req, res) => {
    const {user} = req.params
    User.findOne({user})
    .then((data) => {
        console.log('Data: ', data.prompt);
        return res.json(data.prompt);
    })
    .catch((error) => {
        console.log(error);
    });
})

router.put('/likes', async(req, res) => {
    
    try{
        const {imageId, likes} = req.body;
        const updateImage = await Image.findOneAndUpdate({_id: imageId}, {likes}, {new: true});
        
        res.status(200).json(updateImage);
    } catch (error){
        res.status(400).json({error: error.message});
    }
})

router.put('/dislikes', async(req, res) => {
    
    try{
        const {imageId, dislikes} = req.body;
        const updateImage = await Image.findOneAndUpdate({_id: imageId}, {dislikes}, {new: true});
        res.status(200).json(updateImage);
    } catch (error){
        console.log(error);
        res.status(400).json({error: error.message});
    }
})

export default router;
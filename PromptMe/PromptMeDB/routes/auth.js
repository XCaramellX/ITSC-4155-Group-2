import express from 'express';

const router = express.Router();


// Controllers
import { signup, signin, forgotPassword, resetPassword, promptSelected, uploadImage, comment} from "../API/auth.js";
import Prompts from "../Models/prompts.js";
import Image from "../Models/images.js";
import User from "../Models/user.js"
import Comment from  "../Models/comments.js";

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




router.get('/showImages/:imageId', (req, res) => {
    const {imageId} = req.params;
    const userId = req.query.userId;

    Image.findById(imageId)
    .then((image) => {
        if(!image){
            res.status(404).json({error: "Image not found"});
        } else {
            const userLiked = image.likedBy.includes(userId);
            const userDisliked = image.dislikedBy.includes(userId);

            res.status(200).json({...image._doc, userLiked, userDisliked})
        }
    })
    .catch((error) => {
        console.log(error);
        res.status(400).json({error: error.message});
    });
    
});

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
        const {imageId,  userId} = req.body;
        const image = await Image.findById(imageId);
        const userHasLiked = image.likedBy.includes(userId);
        const userHasDisliked = image.dislikedBy.includes(userId);

        const updateImage = await Image.findOneAndUpdate(
            {_id: imageId}, 
            {
                
                $addToSet: {likedBy: userId},
                $pull: {dislikedBy: userId},
                $inc: {likes: userHasLiked ? 0 : 1, dislikes: userHasDisliked ? -1 : 0},
            }, 
            {new: true}
            
            );

            const userLiked = updateImage.likedBy.includes(userId);
            const userDisliked = updateImage.dislikedBy.includes(userId);

        
        res.status(200).json({...updateImage._doc, userLiked, userDisliked});
    } catch (error){
        res.status(400).json({error: error.message});
    }
})

router.put('/dislikes', async(req, res) => {
    
    try{
        const {imageId,  userId} = req.body;
        const image = await Image.findById(imageId);
        const userHasLiked = image.likedBy.includes(userId);
        const userHasDisliked = image.dislikedBy.includes(userId);

        const updateImage = await Image.findOneAndUpdate(
            {_id: imageId},
            {
               
                $addToSet: {dislikedBy: userId},
                $pull: {likedBy: userId},
                $inc: {likes: userHasLiked ? -1 : 0, dislikes: userHasDisliked ? 0 : 1},
            }, 
            {new: true}
            
            );

            const userLiked = updateImage.likedBy.includes(userId);
            const userDisliked = updateImage.dislikedBy.includes(userId);

        
        res.status(200).json({...updateImage._doc, userLiked, userDisliked});
         
    } catch (error){
        console.log(error);
        res.status(400).json({error: error.message});
    }
})

router.get('/comments/:imageId', async (req,res) => {
    try {
        const {imageId} = req.params;
        const comments = await Comment.find({image: imageId}).populate('user', 'name');
        res.status(200).json(comments);
    }catch(error){
        console.log(error);
        res.status(400).json({error: error.message});
    }
});

router.post("/prompts", promptSelected);
router.post("/upload-image", uploadImage);
router.post("/comments", comment);

export default router;
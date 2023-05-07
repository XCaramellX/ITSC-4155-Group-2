import User from "../Models/user.js";
import Image from "../Models/images.js";
import Comments from "../Models/comments.js";
import { hashPassword, comparePassword } from "../BcryptHash/auth.js";
import jwt from "jsonwebtoken";
import { nanoid } from "nanoid";
import dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";


dotenv.config();

//Cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET,
});


export const signup = async (req, res) => {
    const re = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;

    console.log("Signup Hit");
    try {
        // validation
        const { name, email, password, category, experience } = req.body;
        if (!name) {
            return res.json({
                error: "Name is required",
            });
        }
        if (!email) {
            return res.json({
                error: "Email is required",
            });
        } else if (!re.test(email)) {
            return res.json({
                error: "Please use valid email address!"
            });
        }
        if (!password || password.length < 6) {
            return res.json({
                error: "Password is required and should be 6 characters long",
            });
        }
        if (category == " ") {
            return res.json({
                error: "Must select a category"
            })
        }
        if (experience == " ") {
            return res.json({
                error: "Must select a cexperience level"
            })
        }
        const exist = await User.findOne({ email });
        if (exist) {
            return res.json({
                error: "Email is taken",
            });
        }
        const name_exist = await User.findOne({ name });
        if (name_exist) {
            return res.json({
                error: "User Name is taken",
            });
        }

        // hash password
        const hashedPassword = await hashPassword(password);

        try {
            const user = await new User({
                name,
                email,
                password: hashedPassword,
                category,
                experience,
            }).save();
            // create signed token
            const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
                expiresIn: "7d",
            });
            //   console.log(user);
            const { password, ...rest } = user._doc;
            return res.json({
                token,
                user: rest,
            });
        } catch (err) {
            console.log(err);
        }
    } catch (err) {
        console.log(err);
    }
};
export const signin = async (req, res) => {
    try {
        const { email, password } = req.body;
        // check database for user
        const user = await User.findOne({ email });
        if (!user) {
            return res.json({
                error: "No user found",
            });
        }
        // check password
        const match = await comparePassword(password, user.password);
        if (!match) {
            return res.json({
                error: "Wrong password",
            });
        }
        // create signed token
        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
            expiresIn: "7d",
        });
        user.password = undefined;
        user.secret = undefined;
        res.json({
            token,
            user,
        });
    } catch (err) {
        console.log(err);
        return res.status(400).send("Error. Try again.");
    }
};
export const forgotPassword = async (req, res) => {
    const { email } = req.body;
    // find user by email
    const user = await User.findOne({ email });
    console.log("USER ===> ", user);
    if (!user) {
        return res.json({ error: "User not found" });
    }
    // generate code
    const resetCode = nanoid(5).toUpperCase();
    // save to db
    user.resetCode = resetCode;
    user.save();
    // prepare email
    const emailData = {
        from: process.env.EMAIL_FROM,
        to: user.email,
        subject: "Password reset code",
        html: "<h1>Your password  reset code is: {resetCode}</h1>"
    };
};
export const resetPassword = async (req, res) => {
    try {
        const { email, password, resetCode } = req.body;
        // find user based on email and resetCode
        const user = await User.findOne({ email, resetCode });
        // if user not found
        if (!user) {
            return res.json({ error: "Email or reset code is invalid" });
        }
        // if password is short
        if (!password || password.length < 6) {
            return res.json({
                error: "Password is required and should be 6 characters long",
            });
        }
        // hash password
        const hashedPassword = await hashPassword(password);
        user.password = hashedPassword;
        user.resetCode = "";
        user.save();
        return res.json({ ok: true });
    } catch (err) {
        console.log(err);
    }
};
export const promptSelected = async (req, res) => {

    try {
        console.log(req.body.prompt);
        console.log(req.body.user._id)

        const user = await User.findByIdAndUpdate(req.body.user._id);
        user.prompt = req.body.prompt;
        user.save();

        console.log(user.name)

        return res.json({
            _id:user._id,
            name: user.name,
            email: user.email,
            category: user.category,
            experience: user.experience,
            prompt: user.prompt,
            public_id: user.public_id,
            url: user.url,
        })
        
    } catch (err) {
        console.log(err)
    }
}

export const uploadImage = async (req, res) => {
    try {
        const result = await cloudinary.uploader.upload(req.body.image, {
            public_id: nanoid(),
            resource_type: 'image',
            format: 'jpg'
        });

        console.log(req.body.user);

        const id = await User.findOne(req.body.user);

        const userImage = new Image({
            user_id: id._id,
            user: req.body.user.name,
            user_image: req.body.user.url,
            id: result.public_id,
            url: result.secure_url,
            prompt: req.body.user.prompt,
            likes: 0,
            dislikes: 0,
            comments: [],
        })


        await userImage.save();
    } catch (error) {
        console.log(error);
    }
};

export const comment = async (req, res) => {
    try {
        const { userId, imageId, commentText } = req.body

        const newComment = new Comments({
            user: userId,
            image: imageId,
            commentText: commentText
        });

        await newComment.save();
        res.status(201).json(newComment);
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: error.message });
    }
};

export const uploadProfilePic = async (req, res) => {
    try {

        const result = await cloudinary.uploader.upload(req.body.image, {
            public_id: nanoid(),
            resource_type: 'image',
            format: 'jpg'
        });
        console.log(req.body.user);

        const user = await User.findByIdAndUpdate(
            req.body.user._id,
            {
                public_id: result.public_id,
                url: result.secure_url,
            },
            {new: true}   
        );

        console.log(user.url);
        return res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            category: user.category,
            experience: user.experience,
            prompt: user.prompt,
            public_id: user.public_id,
            url: user.url,
        });


    } catch (error) {
        console.log(error);
        return res.json(error);
    }
}
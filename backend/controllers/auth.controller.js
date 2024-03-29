import bcryptjs from "bcryptjs";
import User from "../models/user.model.js";
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const singup = async (req, res) => {
    try {
        // user inputs
        const { fullName, username, password, confirmPassword, gender } = req.body;

        // check if passwords match
        if(password !== confirmPassword) {
            return res.status(400).json({ error:"Password do not match" });
        };

        // check if username exists
        const user = await User.findOne({ username });
        if(user) {
            return res.status(400).json({ error:"Username already exists" });
        };

        // HASH PASSWORD HERE
        const salt = await bcryptjs.genSalt(16);
        const hashedPassword = await bcryptjs.hash(password, salt);

        // Create user profile image
        // https://avatar-placeholder.iran.liara.run/
        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}]`;

        // create new user using inputs
        const newUser = new User({
            fullName,
            username,
            password: hashedPassword,
            gender,
            profilePic: gender === "male" ? boyProfilePic : girlProfilePic
        });

        // save user data to database
        if(newUser) {
            // Generate JWT tohen here
            generateTokenAndSetCookie(newUser._id, res);
            await newUser.save();

            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                username: newUser.username,
                profilePic: newUser.profilePic,
            });
        } else {
            res.status(400).json({ error: "Invalid user data" });
        };

    } catch (error) {
        console.log("Error in signup controller", error.message);
        res.status(500).json({error:"Internal Server Error"});
    }
};

export const login = async (req, res) => {
    try {
        const {username, password} = req.body;
        const user = await User.findOne({ username });
        const isPasswordCorrect = await bcryptjs.compare(password, user?.password || "");

        if (!user || !isPasswordCorrect) {
            return res.status(400).json({ error: "Invalid username or password" });
        } else {
            // Generate JWT cookie and log user in
            generateTokenAndSetCookie(user._id, res);
    
            res.status(200).json({
                _id: user._id,
                fullname: user.fullName,
                username: user.username,
                profilePic: user.profilePic,
            });
        }
    } catch (error) {
        console.log("Error in login controller", error.message);
        res.status(500).json({error:"Internal Server Error"});
    }
};

export const logout = (req, res) => {
    try {
        res.cookie("jwt", "", { maxAge: 0 });
        res.status(200).json({ message: "Logged out successfully" });
    } catch (error) {
        console.log("Error in logout controller", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    };
};

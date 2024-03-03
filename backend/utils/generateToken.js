import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: "2d",
    });

    res.cookie("jwt", token, {
        maxAge: 2 * 24 * 60 * 60 * 1000, //ms
        httpOnly: true, // prevents XSS
        sameSite:"strict", // protect against CSRF attacks
        secure: process.env.NODE_ENV == "production",
    });
};

export default generateTokenAndSetCookie;
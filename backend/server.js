import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json()); // to parse the incoming requrest with JSON payloads (from req.body)

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`server running http://localhost:${PORT}/`);
});

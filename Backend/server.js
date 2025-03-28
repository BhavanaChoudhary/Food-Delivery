import express from "express";
import cors from "cors";

// App config
const app = express();
const port = 4000;

// Middleware
app.use(express.json());
app.use(cors());

// API routes
app.get("/", (req, res) => {
    res.send("API working");
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

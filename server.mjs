// Imports
import express from "express";
import dotenv from "dotenv";



// Set up
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;


// Middleware
app.use(express.json());

// Routes


// Listen
app.listen(PORT, () => {
    console.log(`Server listening at port ${PORT}`)
})
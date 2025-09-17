// Imports
import express from "express";
import dotenv from "dotenv";
import databaseConnection from "./db/conn.mjs"
import employersRouter from "./routes/employersRoute.mjs";
import jobSeekersRouter from "./routes/jobSeekersRoute.mjs";
import jobsRouter from "./routes/jobsRoute.mjs";
import globalErrorHandling from './middleware/globalErrorHandling.mjs';

// Set up
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;

// Database connection
databaseConnection()


// Middleware
app.use(express.json());
app.use(globalErrorHandling);


// Routes
app.use('/api/jobs', jobsRouter);
app.use('/api/jobseekers', jobSeekersRouter);
app.use('/api/employers', employersRouter);




// Listen
app.listen(PORT, () => {
    console.log(`Server listening at port ${PORT}`)
})
import express from "express";
import JobSeekers from "../models/jobSeekerSchema.mjs";
import { jobSeekers } from "../data/data.mjs";

// Set up
const jobSeekerRouter = express.Router();

// =========================  Seed route - used for seeding and commented out ===========================
// jobSeekerRouter
// .route('/seed')
// .get(async (req, res) => {
//     try{
//         await JobSeekers.insertMany(jobSeekers);
//         console.log("Data added successfully");
//         res.status(200).send("Seed data added successfully");
//     } catch(err) {
//         console.error(err.message);
//         res.status(500).send("Error seeding data");
//     }
// })


// CREATE


// READ



// UPDATE


// DELETE





export default jobSeekerRouter;
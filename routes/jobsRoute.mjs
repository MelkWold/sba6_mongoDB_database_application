import express from "express";
import Jobs from "../models/jobAdvertisementSchema.mjs";
import { jobAdvertisements } from "../data/data.mjs";

// Set up
const jobsRouter = express.Router();

// =========================  Seed route - used for seeding and commented out ===========================
// jobsRouter
// .route('/seed')
// .get(async (req, res) => {
//     try{
//         await Jobs.insertMany(jobAdvertisements);
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


export default jobsRouter;
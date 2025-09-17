import express from "express";
import Employers from "../models/employerSchema.mjs";
import { employers } from "../data/data.mjs";
// Set up
const employersRouter = express.Router();


// =========================  Seed route - used for seeding and commented out ===========================
// employersRouter
// .route('/seed')
// .get(async (req, res) => {
//     try{
//         await Employers.insertMany(employers);
//         console.log("Data added successfully");
//         res.status(200).send("Seed data added successfully")
//     } catch(err) {
//         console.error(err.message);
//         res.status(500).send("Error seeding data");
//     }
// })

// CREATE


// READ



// UPDATE


// DELETE

export default employersRouter;
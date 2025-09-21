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

//================================  CREATE a new job seeker ===========================================
jobSeekerRouter
.route('/')
.post(async (req, res) => {
    let newJobSeeker = await JobSeekers.create(req.body);
    jobSeekers.push(newJobSeeker);
    res.json(newJobSeeker);
})
// GET all Job seekers in the database
.get(async (req, res)=> {
    let allJobSeekers = await JobSeekers.find({});
    res.json(allJobSeekers);
});

jobSeekerRouter
.route('/:jobSeekerName')
// GET a specific job seeker
.get(async (req, res) => {
    try {
        let jobSeeker = await JobSeekers.findOne({ jobSeekerName: req.params.jobSeekerName });
        if (!jobSeeker) res.status(404).json({ msg: "Job Seeker not found" });
        res.json(jobSeeker);
    } catch (err) {
        res.status(500).json({ msg : err.message })
    }
})

// UPDATE a specific job seeker after finding them by name
.put(async (req, res) => {
    try {
        let updatedJobSeeker = await JobSeekers.findOneAndUpdate(
            { jobSeekerName: req.params.jobSeekerName }, req.body,
            {new: true});
        if(!updatedJobSeeker) return res.status(404).json({ msg: "Job Seeker not found" });    
        res.json(updatedJobSeeker)
    } catch (err) {
        res.status(400).json({ msg: err.message });
    }
    
})

// DELETE a specific job seeker by name
.delete(async (req, res) => {
    try {
        let deletedJobSeeker = await JobSeekers.findOneAndDelete({ 
            jobSeekerName:req.params.jobSeekerName });
        if (!deletedJobSeeker) {
            res.json({ msg: "Job Seeker doesn't exist"});
        }

        res.json({ msg: "Job Seeker Deleted Successfully", deletedJobSeeker });
        } catch (err) {
             res.status(400).json({ msg: err.message });
}
});



export default jobSeekerRouter;
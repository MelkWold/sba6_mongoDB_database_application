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
jobsRouter
.route('/')
.post(async (req, res) => {
    let newJob = await Jobs.create(req.body);
    jobAdvertisements.push(newJob);
    res.json(newJob);
})
// GET all jobs in the database
.get(async (req, res)=> {
    let allJobs = await Jobs.find({});
    res.json(allJobs);
});

jobsRouter
.route('/:title')
// GET a specific job advertisement
.get(async (req, res) => {
    try {
        let jobAd = await Jobs.findOne({ title: req.params.title});
        if (!jobAd) res.status(404).json({ msg: "Job Advertisement not found" });
        res.json(jobAd);
    } catch (err) {
        res.status(500).json({ msg : err.message })
    }
})

// UPDATE a specific job Ad after finding it by title
.put(async (req, res) => {
    try {
        let updatedJobAd = await Jobs.findOneAndUpdate(
            { title: req.params.title }, req.body,
            {new: true});
        if(!updatedJobAd) return res.status(404).json({ msg: "Job Advertisement not found" });    
        res.json(updatedJobAd)
    } catch (err) {
        res.status(400).json({ msg: err.message });
    }
    
})

// DELETE a specific job seeker by title
.delete(async (req, res) => {
    try {
        let deletedJobAd = await Jobs.findOneAndDelete({ 
            title:req.params.title });
        if (!deletedJobAd) {
            res.json({ msg: "Job Advertisement doesn't exist"});
        }

        res.json({ msg: "Job Advertisement Deleted Successfully", deletedJobAd });
        } catch (err) {
             res.status(400).json({ msg: err.message });
}
});





export default jobsRouter;
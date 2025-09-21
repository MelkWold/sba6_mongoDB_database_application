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

// ================================  CREATE a new employer ===========================================
employersRouter
.route('/')
.post(async (req, res) => {
    let newEmployer = await Employers.create(req.body);
    employers.push(newEmployer);
    res.json(newEmployer);
})
// GET all employers in the database
.get(async (req, res)=> {
    let allEmployers = await Employers.find({});
    res.json(allEmployers);
});

// ================================ GET, UPDATE, DELETE by companyName ================================
employersRouter
.route('/:companyName')
// GET a specific employer
.get(async (req, res) => {
    try {
        let company = await Employers.findOne({ companyName: req.params.companyName });
        if (!company) res.status(404).json({ msg: "Company not found" });
        res.json(company);
    } catch (err) {
        res.status(500).json({ msg : err.message })
    }
})

// UPDATE a specific company after finding it by name
.put(async (req, res) => {
    try {
        let updatedCompany = await Employers.findOneAndUpdate(
            { companyName: req.params.companyName }, req.body,
            {new: true});
        if(!updatedCompany) return res.status(404).json({ msg: "Company not found" });    
        res.json(updatedCompany)
    } catch (err) {
        res.status(400).json({ msg: err.message });
    }
    
})

// DELETE a specific company by name
.delete(async (req, res) => {
    try {
        let deletedCompany = await Employers.findOneAndDelete({ companyName:req.params.companyName });
        if (!deletedCompany) res.json({ msg: "Company doesn't exist"});

        res.json( { msg: "Employer Deleted Successfully", deletedCompany })
        } catch (err) {
             res.status(400).json({ msg: err.message });
}
});



export default employersRouter;
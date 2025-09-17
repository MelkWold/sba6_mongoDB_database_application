import mongoose from "mongoose";

const jobSeekerSchema =  new mongoose.Schema({
    jobSeekserName: {type: String, required:true},
    jobSeekserAddress: {
        city: String, required:true,
        state: String, required:true,
        zipcode: String, required:true,
        country: String, required:true},
    jobSeekserField: {type: String,
        enum: {
            values: ["IT Support", "Fullstack Development", "Backend", "Frontend", "Teacher", "STEM", "Arts", "Other"],
            required:true
        }
    } 
})

// Create indices for fast querying
jobSeekerSchema.index({ jobSeekerName: 1 });
jobSeekerSchema.index({ jobSeekerAddress: 1 });
jobSeekerSchema.index({ jobSeekerField: 1 });


export default mongoose.model("JobSeekers", jobSeekerSchema);
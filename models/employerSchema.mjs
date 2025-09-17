import mongoose from "mongoose";

const employerSchema =  new mongoose.Schema({
    companyName: {type: String, required:true},
    companyAddress: {
        city: String, required:true,
        state: String, required:true,
        zipcode: String, required:true,
        country: String, required:true},
    companyType: {type: String,
        enum: {
            values: ["Private", "Public", "Government", "Nonprofit", "Education", "Healthcare", "International", "Other"],
            required:true
        }
    } 
})

// Create indices for fast querying
employerSchema.index({ companyName: 1 });
employerSchema.index({ companyType: 1 });




export default mongoose.model("Employers", employerSchema.mjs);
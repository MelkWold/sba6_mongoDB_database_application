import mongoose from "mongoose";

const employerSchema =  new mongoose.Schema({
    companyName: { type: String, required:true},
    companyAddress: {
        city: { type:String, required:true },
        state: { type: String, required:false },
        zipcode: { type:String, required:true },
        country: { type:String, required:true }
    },
    companyType: {
        type: String,
        enum: ["Private", "Public", "Government", "Nonprofit", "Education", "Healthcare", "International", "Other"],
        required:true
    }
});

// Create indices for fast querying
employerSchema.index({ companyName: 1 });
employerSchema.index({ companyType: 1 });




export default mongoose.model("Employers", employerSchema);
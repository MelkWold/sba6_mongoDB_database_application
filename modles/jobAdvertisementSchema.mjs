import mongoose from "mongoose";

const jobAdvertisementSchema = new mongoose.Schema ({
    title: { type: String, required: true },
    description: { type: String, required: true },
    requiredSkills: { type: String, required: true },
    salary: { type: Number, required:true }

})

jobAdvertisementSchema.index({ salary: 1 });
jobAdvertisementSchema.index({ requiredSkills : 1 })


export default mongoose.model("JobAdvertisements", jobAdvertisementSchema);
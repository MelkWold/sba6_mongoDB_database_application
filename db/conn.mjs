import mongoose from "mongoose";
import dotenv from "dotenv";

// Configure dotenv
dotenv.config();

// Get the connection string from env
const connectionString = process.env.mongoURL || "";

// Set up the connection

async function databaseConnection() {
    try {
        await mongoose.connect(connectionString);
        console.log("MongoBD connected successfully ...")
    } catch(err){
        console.error(`Error: err.message`);
    }
}

export default databaseConnection;
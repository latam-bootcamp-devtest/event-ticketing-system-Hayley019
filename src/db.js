import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost/JalaSoftTest")
    } catch (error) {
        console.log(error);
    }
    
};
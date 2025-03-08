import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
    event_id:{
        type: Number,
        required: true,
        unique: true
    },
    event_name:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        required: true
    },
    seats:{
        type: Number,
        required: true
    }
}, { timestamps: true });

export default mongoose.model("Event", eventSchema)


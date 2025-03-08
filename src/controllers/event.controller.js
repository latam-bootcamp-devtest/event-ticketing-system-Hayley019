import Event from '../models/event.model.js';

export const createEvent = async (req, res) => {
    try {
        
        const{event_id, event_name, date, seats} = req.body;
        
        const newEvent = new Event({
            event_id,
            event_name,
            date,
            seats
        });

        console.log(newEvent);

        const eventSaved = await newEvent.save();

        res.json({
            event_id: eventSaved.event_id,
            event_name: eventSaved.event_name,
            date: eventSaved.date,
            seats: eventSaved.seats
        })
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
        console.log(error);
    }
};

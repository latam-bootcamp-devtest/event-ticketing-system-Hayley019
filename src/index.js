import app from './app.js';
import { connectDB} from './db.js';
import eventRoutes from './routes/events.routes.js';

connectDB();
app.listen(3000);
console.log('Server on port', 3000);

app.use('/api', eventRoutes);    
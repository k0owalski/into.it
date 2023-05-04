import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

import routes from './routes/routes';

const app = express();

dotenv.config();

// MIDDLEWARES
app.use(express.json());

// ROUTING
app.use('/api', routes);

mongoose
	.connect(process.env.MONGO_URI!)
	.then(() => {
		app.listen(process.env.PORT, () => {
			console.log('listening on port ' + process.env.PORT);
		});
	})
	.catch((err) => console.log(err));

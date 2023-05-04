import express from 'express';
import dotenv from 'dotenv';

import routes from 'routes/routes';

const app = express();

dotenv.config();

app.use('/api', routes);

app.listen(process.env.PORT, () => {
	console.log('listening on port ' + process.env.PORT);
});

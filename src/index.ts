/**
 * Index archetype file.
 */

import log from './Utils/log';
import express from 'express';
import Routers from './Routers';

const app = express();
const { port = '3000' } = { port: process.env.PORT };
const { base = '/api' } = { base: process.env.API_BASE };

app.use(base, Routers);

try {
	app.listen(port, () => {
		log.info(`Server started at ${port} port`);
	});
} catch (error) {
	log.error(error);
}

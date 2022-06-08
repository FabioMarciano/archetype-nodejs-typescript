/**
 * Index archetype file.
 */

import log from './utils/log';
import express from 'express';
import routers from './routers';

const app = express();
const { port = `3000` } = { port: process.env.PORT };
const { base = `/` } = { base: process.env.API_BASE };

app.use(base, routers);

try {
	app.listen(port, () => {
		log.info(`Server started at ${port} port`);
	});
} catch (error) {
	log.error(error);
}

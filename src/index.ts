/**
 * Index archetype file.
 */

import express from 'express';
import routers from './router';
import log from './util/log';
import templateEngine from './util/template';

const app = express();
const { port = `3000` } = { port: process.env.PORT };
const { base = `/` } = { base: process.env.API_BASE };

templateEngine(app);

app.use(base, routers);

try {
	app.listen(port, () => {
		log.info(`Server started at ${port} port`);
	});
} catch (error) {
	log.error(error);
}

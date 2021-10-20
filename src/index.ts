/**
 * Index archetype file.
 */

import log from './Utils/log';
import express from 'express';
import routers from './Routers';

const http = express();
const port = Number(process.env.PORT || 3000);

http.use(routers);

try {
	http.listen(port, () => {
		log.info(`Server started at ${port} port`);
	});
} catch (error) {
	log.error(error);
}

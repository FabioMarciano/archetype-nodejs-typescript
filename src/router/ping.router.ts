/**
 * Ping Router file.
 */

import { Router, Request, Response } from 'express';
import controller from '../controller/ping.controller';

const router: Router = Router();

router.get('/ping', (request: Request, response: Response) => {
	controller(request, response);
});

export default router;

/**
 * Ping Router file.
 */

import { Router, Request, Response } from 'express';
import PingController from '../Controllers/ping.controller';

const router: Router = Router();

router.get('/ping', (request: Request, response: Response) => {
	PingController(request, response);
});

export default router;

/**
 * Root Router file.
 */

import { Router, Request, Response } from 'express';
import controller from '../controller/root.controller';

const router: Router = Router();

router.get('/', (request: Request, response: Response): void => {
	controller(request, response);
});

export default router;

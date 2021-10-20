/**
 * Root Router file.
 */

import { Router, Request, Response } from 'express';
import RootController from '../Controllers/root.controller';

const router: Router = Router();

router.get('/', (request: Request, response: Response): void => {
	RootController(request, response);
});

export default router;

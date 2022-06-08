/**
 * Static public Router file.
 */

import express, { Router } from 'express';

const router: Router = Router();

router.use(express.static('public'));

export default router;

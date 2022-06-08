/**
 * Root Controller file.
 */

import { Request, Response } from 'express';
import model from '../models/root.model';
import view from '../views/root.view';

export default (request: Request, response: Response): void => {
	const message: string = model();
	view(request, response, message);
};

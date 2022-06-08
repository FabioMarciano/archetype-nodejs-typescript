/**
 * Ping Controller file.
 */

import { Request, Response } from 'express';
import HttpStatus from '../types/http.status.type';
import model from '../models/ping.model';
import view from '../views/ping.view';

export default (request: Request, response: Response): void => {
	const httpStatusCode: HttpStatus = model();
	view(request, response, httpStatusCode);
};

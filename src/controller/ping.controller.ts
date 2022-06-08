/**
 * Ping Controller file.
 */

import { Request, Response } from 'express';
import HttpStatus from '../type/http.status.type';
import model from '../model/ping.model';
import view from '../view/ping.view';

export default (request: Request, response: Response): void => {
	const httpStatusCode: HttpStatus = model();
	view(request, response, httpStatusCode);
};

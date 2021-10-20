/**
 * Ping Controller file.
 */

import { Request, Response } from 'express';
import HttpStatus from '../Types/http.status.type';
import PingModel from '../Models/ping.model';
import PingView from '../Views/ping.view';

export default (request: Request, response: Response): void => {
	const httpStatusCode: HttpStatus = PingModel();
	PingView(request, response, httpStatusCode);
};

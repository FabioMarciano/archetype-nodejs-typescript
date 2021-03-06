/**
 * Ping View file.
 */

import { Request, Response } from 'express';
import HttpStatus from '../type/http.status.type';

export default (_request: Request, response: Response, httpStatusCode = HttpStatus.OK): void => {
	response.sendStatus(httpStatusCode);
};

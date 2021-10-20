/**
 * Root View file.
 */

import { Request, Response } from 'express';

export default (_request: Request, response: Response, message: string = ''): void => {
	response.send(message);
};

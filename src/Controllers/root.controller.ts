/**
 * Root Controller file.
 */

import { Request, Response } from 'express';
import RootModel from '../Models/root.model';
import RootView from '../Views/root.view';

export default (request: Request, response: Response): void => {
	const message: string = RootModel();
	RootView(request, response, message);
};

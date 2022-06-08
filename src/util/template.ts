/**
 * Template engine file.
 */

import { Express } from 'express';
import engine from 'nunjucks';

export default (application: Express): void => {
	const path = `template`;
	const options = {
		autoescape: true,
		express: application,
	};

	engine.configure(path, options);

	application.set(`view engine`, `.njk`);
};

import express from 'express';
import routers from '../../src/router';
import templateEngine from '../../src/util/template';

const http = express();
http.use(routers);

describe('Util: template', () => {
	describe('Template engine', () => {
		it('Should the application "view engine" setting be equal as expected', async () => {
			templateEngine(http);
			const expected = `.njk`;
			expect(http.get('view engine')).toBe(expected);
		});
	});
});

import express from 'express';
import request from 'supertest';
import router from '../../src/Routers';
import HttpStatus from '../../src/Types/http.status.type';

const http = express();
http.use(router);

describe('Routers', () => {
	describe('Root Router', () => {
		it('Should test [GET /] endpoint', async () => {
			const response = await request(http).get('/');
			expect(response.statusCode).toBe(HttpStatus.OK);
		});
	});

	describe('Ping Router', () => {
		it('Should test [GET /ping] endpoint', async () => {
			const response = await request(http).get('/ping');
			expect(response.statusCode).toBe(HttpStatus.OK);
		});
	});
});

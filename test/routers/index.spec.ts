import express from 'express';
import request from 'supertest';
import routers from '../../src/routers';
import HttpStatus from '../../src/types/http.status.type';

const http = express();
http.use(routers);

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

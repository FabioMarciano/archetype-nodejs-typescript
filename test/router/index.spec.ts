import express from 'express';
import request from 'supertest';
import routers from '../../src/router';
import HttpStatus from '../../src/type/http.status.type';

const http = express();
http.use(routers);

describe('Routers', () => {
	describe('Static Public Router', () => {
		it('Should test [GET /robots.txt] static file', async () => {
			const response = await request(http).get('/robots.txt');
			expect(response.statusCode).toBe(HttpStatus.OK);
		});
	});

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

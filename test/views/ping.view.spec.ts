import { Request, Response } from 'express';
import { ping } from '../../src/views';
import { HttpStatus } from '../../src/types';

const req = {} as Request;
const res = {} as Response;
res.sendStatus = jest.fn();

describe('Ping View', () => {
	it('Should view be called once with HttpStatus.OK', () => {
		const statusCode: HttpStatus = HttpStatus.OK;
		ping(req, res, statusCode);
		expect(res.sendStatus).toBeCalledWith(statusCode);
	});

	it('Should view be called once with no HttpStatus param', () => {
		ping(req, res);
		expect(res.sendStatus).toBeCalled();
	});
});

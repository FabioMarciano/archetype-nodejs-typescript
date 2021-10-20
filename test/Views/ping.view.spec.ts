import { Request, Response } from 'express';
import { PingView } from '../../src/Views';
import { HttpStatus } from '../../src/Types';

const req = {} as Request;
const res = {} as Response;
res.sendStatus = jest.fn();

describe('Ping View', () => {
	it('Should view be called once with HttpStatus.OK', () => {
		const statusCode: HttpStatus = HttpStatus.OK;
		PingView(req, res, statusCode);
		expect(res.sendStatus).toBeCalledWith(statusCode);
	});

	it('Should view be called once with no HttpStatus param', () => {
		PingView(req, res);
		expect(res.sendStatus).toBeCalled();
	});
});

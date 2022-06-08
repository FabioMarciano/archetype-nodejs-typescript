import { Request, Response } from 'express';
import { root } from '../../src/views';

const req = {} as Request;
const res = {} as Response;
res.send = jest.fn();

describe('Root View', () => {
	it('Should view be called once with message string', () => {
		const message: string = 'Hello';
		root(req, res, message);
		expect(res.send).toBeCalledWith(message);
	});

	it('Should view be called once with no message param', () => {
		root(req, res);
		expect(res.send).toBeCalled();
	});
});

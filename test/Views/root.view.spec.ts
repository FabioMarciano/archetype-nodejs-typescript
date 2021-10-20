import { Request, Response } from 'express';
import { RootView } from '../../src/Views';
import { HttpStatus } from '../../src/Types';

const req = {} as Request;
const res = {} as Response;
res.send = jest.fn();

describe('Root View', () => {
	it('Should view be called once with message string', () => {
		const message: string = 'Hello';
		RootView(req, res, message);
		expect(res.send).toBeCalledWith(message);
	});

	it('Should view be called once with no message param', () => {
		RootView(req, res);
		expect(res.send).toBeCalled();
	});
});

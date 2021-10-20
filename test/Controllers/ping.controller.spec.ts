import { Request, Response } from 'express';
import * as Controller from '../../src/Controllers';

const req = {} as Request;
const res = {} as Response;
res.sendStatus = jest.fn();

describe('Ping Controller', () => {
	it('Should controller be called once', () => {
		const spy = jest.spyOn(Controller, 'PingController');
		Controller.PingController(req, res);
		expect(spy).toHaveBeenCalled();
	});
});

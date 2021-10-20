import { Request, Response } from 'express';
import * as Controller from '../../src/Controllers';

const req = {} as Request;
const res = {} as Response;
res.send = jest.fn();

describe('Root Controller', () => {
	it('Should controller be called once', () => {
		const spy = jest.spyOn(Controller, 'RootController');
		Controller.RootController(req, res);
		expect(spy).toHaveBeenCalled();
	});
});

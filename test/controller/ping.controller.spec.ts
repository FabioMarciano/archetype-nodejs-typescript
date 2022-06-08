import { Request, Response } from 'express';
import * as controller from '../../src/controller';

const req = {} as Request;
const res = {} as Response;
res.sendStatus = jest.fn();

describe('Ping Controller', () => {
	it('Should controller be called once', () => {
		const spy = jest.spyOn(controller, 'ping');
		controller.ping(req, res);
		expect(spy).toHaveBeenCalled();
	});
});

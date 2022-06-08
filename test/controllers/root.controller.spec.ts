import { Request, Response } from 'express';
import * as controller from '../../src/controllers';

const req = {} as Request;
const res = {} as Response;
res.send = jest.fn();

describe('Root Controller', () => {
	it('Should controller be called once', () => {
		const spy = jest.spyOn(controller, 'root');
		controller.root(req, res);
		expect(spy).toHaveBeenCalled();
	});
});

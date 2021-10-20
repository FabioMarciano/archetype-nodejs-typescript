import { PingModel } from '../../src/Models';
import { HttpStatus } from '../../src/Types';

describe('Ping Model', () => {
	it('Should get an HttpStatus.OK response', () => {
		const expected: HttpStatus = HttpStatus.OK;
		expect(PingModel()).toBe(expected);
	});
});

import { ping } from '../../src/models';
import { HttpStatus } from '../../src/types';

describe('Ping Model', () => {
	it('Should get an HttpStatus.OK response', () => {
		const expected: HttpStatus = HttpStatus.OK;
		expect(ping()).toBe(expected);
	});
});

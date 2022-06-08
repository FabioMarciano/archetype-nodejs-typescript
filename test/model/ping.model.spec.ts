import { ping } from '../../src/model';
import { HttpStatus } from '../../src/type';

describe('Ping Model', () => {
	it('Should get an HttpStatus.OK response', () => {
		const expected: HttpStatus = HttpStatus.OK;
		expect(ping()).toBe(expected);
	});
});

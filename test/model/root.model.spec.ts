import { root } from '../../src/model';

describe('Root Model', () => {
	it('Should get an string for response', () => {
		expect(typeof root()).toBe('string');
	});
});

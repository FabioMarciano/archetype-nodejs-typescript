import { RootModel } from '../../src/Models';

describe('Root Model', () => {
	it('Should get an string for response', () => {
		expect(typeof RootModel()).toBe('string');
	});
});

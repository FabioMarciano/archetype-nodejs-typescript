const CACHE_ENVIRONMENT = process.env;

describe('Utils: log', () => {
	beforeEach(() => {
		jest.resetModules();
		process.env = { ...CACHE_ENVIRONMENT };
		process.env.NODE_ENV = 'test';
	});

	afterAll(() => {
		process.env = CACHE_ENVIRONMENT;
	});

	it('Should outputs a log info', () => {
		const { log } = require('../../src/utils/');
		const spy = jest.spyOn(log, 'info');
		log.info(`Log Message`);
		expect(spy).toHaveBeenCalled();
	});

	it('Should outputs a log info passing the log path environment', () => {
		process.env.LOG_DIR = 'log';

		const { log } = require('../../src/utils/');
		const spy = jest.spyOn(log, 'error');
		log.error(`Log Message`);
		expect(spy).toHaveBeenCalled();
	});
});

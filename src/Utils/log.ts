/**
 * Log utility file.
 */

import winston from 'winston';

const logBasePath = process.env.LOG_PATH ?? 'log';

const log: winston.Logger = winston.createLogger({
	format: winston.format.combine(
		winston.format.errors({ stack: true }),
		winston.format.timestamp(),
		winston.format.json(),
	),
	transports: [
		[
			new winston.transports.File({ dirname: logBasePath, filename: 'error.log', level: 'error' }),
			new winston.transports.File({ dirname: logBasePath, filename: 'info.log', level: 'info' }),
		],
		new winston.transports.Console(),
	][Number(process.env.NODE_ENV !== 'production')],
});

export default log;

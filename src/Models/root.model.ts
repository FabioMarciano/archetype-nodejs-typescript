/**
 * Root Model file.
 */

const data = require('../../package.json');

export default (): string => {
	return data.description;
};

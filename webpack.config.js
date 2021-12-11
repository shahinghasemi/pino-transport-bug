const {PinoWebpackPlugin} = require('pino-webpack-plugin')

module.exports = {
	entry: './pino/logger.js',
	mode: 'development',
	target: 'node',
	plugins: [
		new PinoWebpackPlugin({ transports: ['pino-pretty'] })
	]
}

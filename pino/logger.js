const pino = require('pino');
const transport = pino.transport({ target: 'pino-pretty' })
const logger = pino(transport)

logger.info('done!')

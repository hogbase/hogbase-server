module.exports = createServer

const Dispatcher = require('./dispatcher')
const process = require('process')
const pino = require('pino')();

// Create a new Hogbase server
function createServer(argv) {
    setupLogging()
    new Dispatcher()
}

function setupLogging() {
    process.on('uncaughtException', pino.final(logger, (err, finalLogger) => {
        finalLogger.error(err, 'uncaughtException')
        process.exit(1)
    }))

    process.on('unhandledRejection', pino.final(logger, (err, finalLogger) => {
        finalLogger.error(err, 'unhandledRejection')
        process.exit(1)
    }))
}
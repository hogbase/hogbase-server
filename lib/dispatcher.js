module.exports = Dispatcher;

const logger = require('pino')();
const QueryProcessorEvents = require('./common/query-processor-events.js');

// Handles and routes requests and responses
class Dispatcher {

    constructor(queryProcessor) {
        this._queryProcessor = queryProcessor;
        this._queryProcessor.addEventListener
    }

    // Handle an incoming request
    handleRequest(request) {
        if (request.requestType === RequestType.QUERY) {
            this._queryProcessor.enqueue(request);
        }
    }

    // Send something to a connected client
    sendToClient(clientId, data) {
    }
}


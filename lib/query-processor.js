module.exports = QueryProcessor

const Piscina = require('piscina')
const path = require('path')

// Deconstructs data queries into data store requests
class QueryProcessor {

    constructor() {
        this._workerPool = new Piscina({
            filename: path.resolve(__dirname, 'query-processor-worker.js')
        })
    }

    async enqueue(request) {
        let response = await this._workerPool.runTask(request)
    }
}
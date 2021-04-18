import http from 'http';

import app from './app.js';

const port = 3000;

function createHttpServer() {
    const httpServer = http.createServer(app)
    httpServer.listen(port, () => {
        console.log(`server started on port: ${port}`)
    })
}

createHttpServer();

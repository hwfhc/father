const WebSocketServer = require('websocket').server;
const http = require('http');
const fs = require('fs');
const getImg = require('./getImg');

var httpServer = http.createServer(function (req, res) {
    console.log((new Date()) + ' Received request for ' + req.url);
});

httpServer.listen(8081, function () {
    console.log((new Date()) + ' WebSocketServer is listening on port 8081');
});


wsServer = new WebSocketServer({ httpServer: httpServer });

wsServer.on('request', function (request) {
    if (!originIsAllowed(request.origin)) {
        // Make sure we only accept requests from an allowed origin
        request.reject();
        console.log((new Date()) + ' Connection from origin ' + request.origin + ' rejected.');
        return;
    }

    //var connection = request.accept('echo-protocol', request.origin);
    var connection = request.accept(null, request.origin);
    console.log((new Date()) + ' Connection accepted.');

    setInterval(handler,500);

    connection.on('close', function (reasonCode, description) {
        console.log((new Date()) + ' Peer ' + connection.remoteAddress + ' disconnected.');
    });

    function handler(){
        getImg(file => {
            console.log('send img');
            connection.sendBytes(file);
            //handler();
        });
    }
});

function originIsAllowed(origin) {
    // put logic here to detect whether the specified origin is allowed.
    return true;
}

module.exports = wsServer;

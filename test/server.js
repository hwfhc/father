const WebSocketServer = require('websocket').server;
const http = require('http');
const fs = require('fs');
const net = require('net');

var httpServer = http.createServer(function (req, res) {
    console.log((new Date()) + ' Received request for ' + req.url);
    console.log(req.url);

    var file = fs.readFileSync(`${__dirname}/logo.jpg`);
    res.end(file);
    /*if(req.url != '/') {
        var file = fs.readFileSync(`${__dirname}/public/${req.url.replace('/','')}`);
        res.end(file);
    }else{
        var data = fs.readFileSync(`${__dirname}/public/index.html`,'utf8');
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    }*/
});
httpServer.listen(8080, function () {
    console.log((new Date()) + ' Server is listening on port 8080');
});


wsServer = new WebSocketServer({ httpServer: httpServer });

function originIsAllowed(origin) {
    // put logic here to detect whether the specified origin is allowed.
    return true;
}

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

    connection.on('message', function (message) {
        var file = fs.readFileSync(`${__dirname}/logo.jpg`);
        console.log('Received Message: ' + message.utf8Data);
        connection.sendBytes(file);

        /*if (message.type === 'utf8') {
            console.log('Received Message: ' + message.utf8Data);
            connection.sendUTF('crazy' + message.utf8Data);
        }
        else if (message.type === 'binary') {
            console.log('Received Binary Message of ' + message.binaryData.length + ' bytes');
            connection.sendBytes(message.binaryData);
        }*/
    });

    connection.on('close', function (reasonCode, description) {
        console.log((new Date()) + ' Peer ' + connection.remoteAddress + ' disconnected.');
    });
});

/*
// Start a TCP Server
net.createServer(function (socket) {
    // Send a nice welcome message and announce
    socket.write("Welcome " + socket.name + "\n");

    var bufs = [];

    var file = fs.readFileSync(`${__dirname}/logo.jpg`);
    console.log(file);

    // Handle incoming messages from clients.
    socket.on('data', function (data) {
        var str = Buffer.from(data,'base64').toString('ascii');
        var buf = Buffer.from(str,'base64').toString('ascii');
        console.log(buf);

        fs.writeFileSync('./message.jpg', buf);

        bufs.push(data);
    });

    // Remove the client from the list when it leaves
    socket.on('end', function () {
        /*text = bufs[0].join();
        var buf = Buffer.from(bufs[0], 'base64'); // Ta-da
        console.log(buf);
        console.log('end');
        fs.writeFileSync('./message.jpg', buf);*/
/*    });
}).listen(8124);
*/

// Put a friendly message on the terminal of the server.
/*
console.log("Chat server running at port 5000\n");
*/

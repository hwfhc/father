const http = require('http');
const net = require('net');
const url = require('url');

// Create an HTTP tunneling proxy
const proxy = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('okay');
});
proxy.on('connect', (req, cltSocket, head) => {
    // connect to an origin server
    const srvUrl = url.parse(`http://${req.url}`);
    const srvSocket = net.connect(srvUrl.port, srvUrl.hostname, () => {
        cltSocket.write('HTTP/1.1 200 Connection Established\r\n' +
            'Proxy-agent: Node.js-Proxy\r\n' +
            '\r\n');
        srvSocket.write(head);
        srvSocket.pipe(cltSocket);
        cltSocket.pipe(srvSocket);
    });
});

// now that proxy is running
proxy.listen(1337, '127.0.0.1', () => {

    // make a request to a tunneling proxy
    const options = {
        port: 1337,
        hostname: '127.0.0.1',
        method: 'CONNECT',
        path: 'www.google.com:80'
    };

    const req = http.request(options);

    req.on('connect', (res, socket, head) => {
        console.log('got connected!');

        // make a request over an HTTP tunnel
        socket.write('GET / HTTP/1.1\r\n' +
            'Host: www.google.com:80\r\n' +
            'Connection: close\r\n' +
            '\r\n');
        socket.on('data', (chunk) => {
            console.log(chunk.toString());
        });
        socket.on('end', () => {
            proxy.close();
        });
    });

    req.end();
});


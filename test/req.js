const http = require('http');
const fs = require('fs');

const options = {
    host: '127.0.0.1',
    port: 8080
};

const req = http.get(options);
req.end();

req.once('response', (res) => {
    const ip = req.socket.localAddress;
    const port = req.socket.localPort;

    console.log(`Your IP address is ${ip} and your source port is ${port}.`);

    // consume response object
    res.on('data',(chunk) => {
        console.log(chunk);
        fs.writeFileSync('./message.jpg', chunk);
    })
});


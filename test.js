const net = require('net');
const fs = require('fs');

const client = net.createConnection({ port: 8124 }, () => {
    //'connect' listener
    console.log('connected to server!');

    var file = fs.readFileSync(`${__dirname}/logo.jpg`);
    //client.sendBytes(file);
    console.log(file);

    var b = new Buffer('sdf');
    var s = b.toString('base64');
    client.write(file);
    client.end();
});

client.on('end', () => {
    console.log('disconnected from server');
});
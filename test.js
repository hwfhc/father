const net = require('net');
const fs = require('fs');

const client = net.createConnection({ port: 8124 }, () => {
    //'connect' listener
    console.log('connected to server!');

    var file = fs.readFileSync(`${__dirname}/logo.jpg`);
    //client.sendBytes(file);
    console.log(file);

    client.write(fs.toJSON());
});

client.on('data', (data) => {
    console.log(data.toString());
    client.end();
});

client.on('end', () => {
    console.log('disconnected from server');
});
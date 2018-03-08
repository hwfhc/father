module.exports = getImg;

const http = require('http');
const fs = require('fs');

function getImg(callback){
    const options = {
        host: '192.168.1.171',
        path: `/html/cam_pic.php?time=${new Date().getTime()}&Delay=4000`,
        port: 80
    };

    const req = http.get(options);
    req.end();

    req.once('response', (res) => {
        // consume response object
        res.on('data',(chunk) => {
            callback(chunk);
        })
    });

}


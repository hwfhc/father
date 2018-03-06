const http = require('http');
const fs = require('fs');

function getImg(callback){
    const options = {
        host: '192.168.43.206',
        path: `/html/cam_pic.php?time=${new Date().getTime()}&Delay=4000`,
        port: 80
    };

    const req = http.get(options);
    req.end();

    req.once('response', (res) => {
        // consume response object
        res.on('data',(chunk) => {
            console.log(chunk);
            fs.writeFileSync('./test.jpg',chunk);
        })
    });

}
getImg();


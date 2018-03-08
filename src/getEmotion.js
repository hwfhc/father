
const http = require('https');

const postData = JSON.stringify({
    'url' : 'http://23.106.132.141:8080'
});

const options = {
  hostname: 'westcentralus.api.cognitive.microsoft.com',
  port: 443,
  path: '/face/v1.0/detect?returnFaceAttributes=age,emotion&returnFaceId=true',
  method: 'POST',
  headers: {
    'Ocp-Apim-Subscription-Key': '6de65914fba749029f22eb8f47c4a657'
  }
};

const req = http.request(options, (res) => {
  res.setEncoding('utf8');

    res.on('data', (chunk) => {
        console.log(`BODY: ${chunk}`);
        var data = JSON.parse(chunk);
        var data = data[0].faceAttributes.emotion;
        console.log(`BODY: ${data}`);
    });

    res.on('end', () => {
        console.log('No more data in response.');
    });
});

req.on('error', (e) => {
    console.error(`problem with request: ${e.message}`);
});

// write data to request body
req.write(postData);
req.end();

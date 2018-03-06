const directory = `${__dirname}/public`;
const app = require('express')();
const wsServer = require('./wsServer');
const fileServer = require('./fileServer');

const server = app.listen(8080,function(){
    console.log((new Date()) + ' Express is listening on port 8080');
});

app.get('/',function(req,res){
    res.sendFile(`${directory}/index.html`);
});

app.get('/:file',function(req,res){
    res.sendFile(`${directory}/${req.params['file']}`);
});



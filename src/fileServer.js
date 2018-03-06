const directory = `${__dirname}/public`;
const app = require('express')();

const server = app.listen(8082,function(){
    console.log(`file sender start`);
});

var i = 1;

app.get('/',function(req,res){
    if(i<=10)
        res.sendFile(`${directory}/${i}.jpg`);

    i++;
});

module.exports = server;

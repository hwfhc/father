const directory = __dirname;
const app = require('express')();


const server = app.listen(8080,function(){
    console.log(`Worker ${process.pid} start`);
});

app.get('/',function(req,res){
    res.sendFile(`${directory}/views/index.html`);
});

app.get('/page/:page',function(req,res){
    res.sendFile(`${directory}/views/${req.params['page']}.html`);
});



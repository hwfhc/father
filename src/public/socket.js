var ws = new WebSocket("ws://127.0.0.1:8081");
var view = document.getElementById("view");

var imgObj = new Image();

imgObj.onload = function () {
    var ctx = view.getContext('2d');
    ctx.drawImage(this, 0, 0, 1024, 768);//this即是imgObj,保持图片的原始大小：470*480
    //ctx.drawImage(this, 0, 0,1024,768);//改变图片的大小到1024*768
}

ws.onopen = function(evt) {
    console.log("Connection open ...");
    ws.send("Hello WebSockets!");
};

ws.onmessage = function(evt) {
    if(typeof(evt.data)=="string"){
        //textHandler(JSON.parse(evt.data));
    }else{
        var reader = new FileReader();

        reader.onload = function(evt){
            if(evt.target.readyState == FileReader.DONE){
                var url = evt.target.result;
                //view.innerHTML = "<img src = "+url+" />";
                imgObj.src = url;
            }
        }

        reader.readAsDataURL(evt.data);
    }
};

ws.onclose = function(evt) {
    console.log("Connection closed.");
};

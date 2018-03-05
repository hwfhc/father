var ws = new WebSocket("ws://127.0.0.1:8080");

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
                alert(url);  
                var img = document.getElementById("imgDiv");  
                img.innerHTML = "<img src = "+url+" />";  
            }  
        }  
        reader.readAsDataURL(evt.data);  
    }  
};    

ws.onclose = function(evt) {
    console.log("Connection closed.");
};
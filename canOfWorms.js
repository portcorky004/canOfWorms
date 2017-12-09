var http = require("http");
var good = 7000;
var bad = 7500;

function happy(){
    function handleRequest(req, resp){
        resp.end("You can do more than you think you can." + req.url);
    };
    
    var server = http.createServer(handleRequest);
};

function sad(){
    function handleRequest(req, resp){
        resp.end("You have terrible taste" + req.url);
    };
    
    var server = http.createServer(handleRequest);
};

server.listen(good, function(){
    happy();
});

server.listen(bad, function(){
    sad();
});
var http = require("http");

var PORT1 = 7000;
var PORT2 = 7500;

var goodServer = http.createServer(handleGoodRequest);

var badServer = http.createServer(handleBadRequest);

goodServer.listen(PORT1, function(){
    console.log(`Sever listening on http://localhost:${PORT1}`);
});

badServer.listen(PORT2, function(){
    console.log(`Server listening on http://localhost${PORT2}`);
});

function handleGoodRequest(request, response){
    response.end("You are an amazing individual with great skills and talents! Path Hit " + request.url);
}

function handleBadRequest(request, response){
    response.end("You still have work to do on builing yourself up to be the best person you can be. Path Hit " + request.url);
}
var http = require('http');

var PORT = 8060;
//var PORT2 = 7000;

function handdleRequest(request,response){
    
    response.end('it works !! ' + request.url);
}
    
    var server = http.createServer(handdleRequest);
    
    
    server.listen(PORT, function(){
        console.log("server on http://localhsot"+ PORT)
    })
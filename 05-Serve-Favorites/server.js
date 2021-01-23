const http = require("http")
const fs = require('fs')

const PORT = 800;

function handdleRequest(req, rest){
    console.log(req)
}
const server = http.Createserver(handdleRequest)
server.listen(PORT, function(){

console.log('liesting on port: ', PORT)
})
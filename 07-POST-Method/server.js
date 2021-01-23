const http = require('http')
const fs = require('fs')
const PORT = 8080;
function handleRequest(request, response){
    let path = request.url
    switch (path) {
        case "/":
            if(req.method === "POST"){
                console.log('post')
                console.log(req)
            }else{
                return displayRoot(res);
            }
        case "/favorite-food":
            return displayFavoriteFoods(res);
        case "/favorite-movies":
            return displayFavoriteMovies(res);
        case "/favorite-framework":
            return displayFavoriteFrameworks(res);
    }
}
function displayRoot(res){
    fs.readFile(__dirname + "/index.html", function(err, fileData){
        displayData(err, fileData, res)
    })
}
function displayFavoriteFoods(res){
    fs.readFile(__dirname + "/favorite_food.html", function(err, fileData){
        displayData(err, fileData, res)
    })
}
function displayFavoriteMovies(res){
    fs.readFile(__dirname + "/favorite_movies.html", function(err, fileData){
        displayData(err, fileData, res)
    })
}
function displayFavoriteFrameworks(res){
    fs.readFile(__dirname + "/favorite_frameworks.html", function(err, fileData){
        displayData(err, fileData, res)
    })
}
function displayData(err, fileData, res){
    if(err) throw err;
    res.writeHead(200, {'Content-Type' : 'text/html'})
    res.end(fileData)
}
const server = http.createServer(handleRequest)
server.listen(PORT, function(){
    console.log('listening on port: ', PORT)
})
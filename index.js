function Main() {
    const http = require('http');
    var port = 443;

    function onRequest(request, response) {
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write("<html><head><title>Home</title></head><body>Hello, World</body></html>")
        response.end();        
    }

    http.createServer(onRequest).listen(port);

    console.log("Listening on port 443...");
}   

Main();
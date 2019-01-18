function Main() {
    const http = require('http');
    var port = 8080;

    function onRequest(request, response) {
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write("<html><head><title>Hello, World!</title></head><body><p>Hello, World!</p><p>Hello, World!</p><p>Hello, World!</p></body></html>")
        response.end();      
  }

    http.createServer(onRequest).listen(port);

    console.log("Listening on port 8080...");
}
Main();
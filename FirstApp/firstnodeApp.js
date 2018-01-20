var http = require('http')

http.createServer( function(request, response) { 
			
			//Send the HTTP Header
			//HTTP status : 200 means OK
			//Content type should be plain/text
			response.writeHead(200, { 'Content-Type': 'text/plain'});
			//Send response body as hello world
			response.end('Hello World\n');
				}).listen(8081);

//Upon successful completion above method of http, the console will print success msg
console.log("Server running at 127.0.0.1/8081...")
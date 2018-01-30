//t
//author: apajseek
//date: 25th Jan 2018

var http=require('http');

http.createServer(function(req, res){
		res.end('Your User Agent is ' +  req.headers['user-agent']);
}
).listen(8082)
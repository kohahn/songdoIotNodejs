var http=require('http');
var fs=require('fs');
fs.readFile('./hello.js', function(err,data){
var length=0;
	if(err){
		console.log(err);
	}else{
		console.log(data);
		console.log(data.toString());
		length = data.toString().length;
	}
});
//console.log("length="+length);

http.createServer(function handler(req,res){
	console.log('callback!');
	res.writeHead(200, 
			{'Content-Type':'text/plain'});
			res.end('Hello World\n');    //콜백함수, 클라이언트가 요청했을때만
}).listen(80);
console.log('server running at port 80');
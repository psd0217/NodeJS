var http = require('http');
var fs = require('fs');
var url =  require('url');

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    console.log(queryData.id);
    if(_url == '/'){
      _url = '/index.html';
    }
    if(_url == '/favicon.ico'){
      return response.writeHead(404);
    }
    response.writeHead(200);
    //console.log(__dirname + url);
    //response.end(fs.readFileSync(__dirname + _url));
      response.end(queryData.id);
    //response.end('egoing : ' + url);
});
app.listen(80);

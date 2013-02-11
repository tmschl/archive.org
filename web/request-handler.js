var fs = require('fs');
var url = require('url');

exports.handleRequest = function (req, res, outputOverride) {
  var pathname = url.parse(req.url).pathname;

  if(req.method === 'GET' && pathname){
    var fileToRead;
    res.writeHead(200);

    if(pathname === '/'){
      fileToRead = __dirname + '/public/index.html';
    } 

    if (pathname === '/www.google.com'){
      fileToRead = '../data/sites/www.google.com';
    }

    var fileReader = fs.readFileSync(fileToRead);

    res.end(fileReader);

  }

};
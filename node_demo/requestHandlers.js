var querystring = require("querystring");

function start(responsei, postData) {
  console.log("Request hander 'start' was called");
  
  var body = '<html>' + 
    '<head>' + 
    '<meta http-equiv="COntent-Type" content="text/html";' +
    'charset=utf-8/>'+
    '</head>'+
    '<body>'+
    '<form action="/upload" method="post">'+
    '<textarea name="text" rows="20" cols="60"></textarea>'+
    '<input type="submit" value="Submit text" />' +
    '</from>' +
    '</body>' +
    '</html>';
  
  response.writeHead(200,{"Content-Type":"text/html"});
  response.write(body);
  response.end();
}

function upload(response, postData) {
  console.log("Request handler 'upload' was called");
  response.writeHead(200, {"Content-Type":"text/plain"});
  response.write("You've sent:" + querystring.parse(postData).text);
  response.end();
}

exports.start = start;
exports.upload = upload;

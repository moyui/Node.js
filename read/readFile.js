const fs = require('fs');

let data = '';
let readrStream = fs.createReadStream('./README.md');

readrStream.setEncoding('utf8');

readrStream.on('data', function(chunk) {
	  data += chunk;
})

readrStream.on('end', function() {
  console.log(data);
});

readrStream.on('error', function(err) {
  console.log(err.stack);
});

console.log('程序执行完毕');

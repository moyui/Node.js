const fs = require('fs');

let pathname = {
	src: './copy.js',
	dist: './test.js'
};

let ReadStream = fs.createReadStream(pathname.src);
let WriteStream = fs.createWriteStream(pathname.dist);

ReadStream.on('data', function(chunk) {
	if (WriteStream.write(chunk) === false) {
		ReadStream.pause();
	}
});

WriteStream.on('drain', function() {
	ReadStream.resume();
});

ReadStream.on('end', function() {
  WriteStream.end();
})

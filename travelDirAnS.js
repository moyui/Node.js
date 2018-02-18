const fs = require('fs');
const path = require('path');

function travel(dir, callback) {
	fs.readdir(dir, (err, files) => {
		if (err) {
			callback(dir);
			return;
		}
		files.map(function(value, index) {
	   let pathname = path.join(dir, value);
			fs.access(pathname, (err) => {
				if (err) {
					callback(pathname);
					return;
				} else {
					travel(pathname, callback);
				}
			});
		});
	});
}

travel(__dirname, function(pathname) {
	console.log(pathname);
})

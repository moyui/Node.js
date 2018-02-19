const fs = require('fs');
const zlib = require('zlib');

fs.createReadStream('./README.md.gz')
.pipe(zlib.createGzip())
	.pipe(fs.createWriteStream('README.md.gz'));

	console.log('文件压缩完成');

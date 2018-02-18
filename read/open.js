const fs = require('fs');

fs.open('README.md', 'r+', function(err, fd) {
  if(err) {
    return console.err(err);
  }
  console.log('文件打开成功!');
});

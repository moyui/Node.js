var fs = require('fs');

fs.writeFile('README.md', 'Hello Node.js', {flag: 'a+'}, (err) => {
   if(err) throw err;
   console.log('It\'s saved!')
})

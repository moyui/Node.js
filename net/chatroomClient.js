const net = require('net');
process.stdin.resume();
process.stdin.setEncoding('utf8');

const client = net.connect({port: 8080}, () => {
	console.log('Connected to server');
	console.log('input: ');
	process.stdin.on('data', (data) => {
		console.log('input: ');
		client.write(data);
		if (data === 'close\n') {
			client.end();
		}
	});
});
client.on('data', (data) =>{
	console.log('Other user \'s input', data.toString());
});
client.on('end', () => {
	console.log('Disconnected from server');
	process.exit();
});

const net = require('net');

const client = net.connect({port: 8080}, () => {
  console.log('连接服务器');
	client.write('http://xingxin.me \r\n');
});

client.on('data', (data) => {
	console.log('接受服务端的数据:', data.toString());
	client.end();
});

client.on('end', () => {
	console.log('断开连接');
});

const net = require('net');

const server = net.createServer((socket) => {
	console.log('客户端连接');
	socket.on('data', (data) => {
		console.log('监听客户端的数据： ', data.toString());
	});
	socket.on('end', (data) => {
		console.log('客户端断开连接');
	})
	socket.write('哈哈哈，我是一个测试 \r\n');
})

server.listen(8080, () => {
	console.log('服务创建');
})

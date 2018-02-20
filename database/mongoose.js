const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/db1');

const db = mongoose.connection;

db.on('error', function(error) {
	console.log('数据库连接失败:' + error);
});

db.on('open', function() {
	console.log('数据库连接成功');
});

const schema = new mongoose.Schema({
	num: Number,
	name: String,
	size: String
});

let MyModel = mongoose.model('mymodel123', schema);

let doc2 = new MyModel({name:'doc2', size: 'small'});
doc2.save();



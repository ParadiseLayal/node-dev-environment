const mysql = require('mysql');

// 创建连接对象
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'xiaoxiao0313..',
  port: 3306,
  database: "myblog"
});

// 开始连接
connection.connect();

// 执行sql 语句
const sql = `select * from blogs`;
// const sql = `insert into blogs (title,content,author,createdAt) values ('1', '2', '3', '123444444444');`
connection.query(sql, (err, result) => {
  if(err) {
    console.error('err', err);
    return;
  }
  console.log('result', result);
})

// 关闭连接
connection.end();




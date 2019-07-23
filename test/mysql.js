const mysql=require('mysql') 

//创建连接对象
const con=mysql.createConnection({
    host:'127.0.0.1',
    port:'3306',
    user:'root',
    password:'123456',
    database:'myblog'
})

//开始连接
con.connect()

//执行sql语句
const sql='select * from users;'
const sql2=`updata users set  id='2' where username='Bob;`

con.query(sql,(err,result)=>{
    if(err){
        console.log('error')
        return 
    }
    console.log(result)
})
//断开连接
con.end()

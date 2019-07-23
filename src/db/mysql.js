const mysql=require('mysql')
const { MYSQL_CONF } =require('../config/db')

//创建链接对象

const con=mysql.createConnection(MYSQL_CONF)

con.connect()

//执行SQL的函数
function exec(sql){
    const promise=new Promise((resolve,reject)=>{
        con.query(sql,(err,result)=>{
            if(err){
                console.log('error')
                return 
            }
            resolve(result)
        })
    })
   return promise
}



module.exports={
    exec
}
const  env=process.env.NODE_ENV

let MYSQL_CONF

if(env==='dev'){
    MYSQL_CONF={
        host:'127.0.0.1',
        port:'3306',
        user:'root',
        password:'123456',
        database:'myblog'
    }
}

if(env==='product'){ 
    MYSQL_CONF={
    host:'127.0.0.1',
    port:'3306',
    user:'root',
    password:'123456',
    database:'myblog'
    }
}

module.exports={
    MYSQL_CONF
}
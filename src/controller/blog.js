const {exec}=require('../db/mysql')

const getList=(author,keyword)=>{
    let sql=`select * from blogs where 1=1 `
    if(author){
        sql+=`and author='${author}' ` 
    }
    if(keyword){
        sql+=`and titlle like '%${keyword}%' `
    }

    sql+=`order by createTime desc;`

    return exec(sql)

}


const getDetail=(id)=>{
    
}

//blogdata是一个对象
const newBlog=(blogData={})=>{
   
}

const updateBlog=(id,blogData={})=>{
    
}

const deleteBlog=(id)=>{
    return true
}

module.exports={
    getList,
    getDetail,
    newBlog,
    updateBlog,
    deleteBlog
}
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

    const sql=`selec * from blogs where id=${id}`
    return exec(sql).then(row=>{
        return row[0]
    })
    
}

//blogdata是一个对象
const newBlog=(blogData={})=>{
   const titlle=blogData.titlle
   const content=blogData.content
   const createTime=blogData.createTime
   const author=blogData.author

   const sql=`insert into blogs (title,content,createTime,author) values
                '${titlle}','${content}',${createTime},'${author}'`
    return exec(sql).then(insertData=>{
        console.log('insert data is',insertData)
        return{
            id:insertData.insertId
        }
    })
}

//更新博客
const updateBlog=(id,blogData={})=>{
    const title=blogData.title
    const content=blog.content

    const sql=`updata blogs set title='${title}',content='${content}' where  id=${id}`

    return exec(sql).then(updateData=>{
        console.log('updata is',updateData)
        if(updateData.affectedRows>0){
            return true
        }
        return false
    }) 
}

//删除博客
const deleteBlog=(id,author)=>{
    const sql=`delete from blogs where id=${id} and author='${author}' `
    return exec(sql).then(deleteData=>{
        if(deleteData.affectedRows>0){
            return true
        }
        return false
    })
}

module.exports={
    getList,
    getDetail,
    newBlog,
    updateBlog,
    deleteBlog
}
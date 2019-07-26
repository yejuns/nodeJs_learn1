const { getList,
        getDetail,
        newBlog,
        updateBlog,
        deleteBlog}=require('../controller/blog')
const {SuccessModel, ErrorModel}=require('../model/resModel') 

const handleBlogRouter=(req,res)=>{
    const method=req.method
    const id=req.query.id

    //重复代码写入全局
    // const url=req.url
    // const path=url.split('?')[0]

    //获取博客列表
    if(method==='GET'&&req.path==='/api/blog/list'){
        const author=req.query.author||''
        const keyword=req.query.keyword||''
        
        const result=getList(author,keyword)
        return result.then(listData=>{
            return new SuccessModel(listData)
        })

        return new SuccessModel(listData)
    }

    //获取博客详情
    if(method==='GET'&&req.path==='/api/blog/detail'){
        
        // const data=getDetail(id)
        // return new SuccessModel(data)

        const result=getDetail(id)
        return result.then(data=>{
            return new SuccessModel(data)
        })
    }

    ///新建博客
    if(method==='POST'&&req.path==='/api/blog/new'){
        // const blogData=req.body
        // const data=newBlog(blogData)
        // return new SuccessModel(data)
        const author='张三'
        Request.body.author=author
        const result=newBlog(Request.body)
        return result.then(data=>{
            return new SuccessModel(data)
        })
    }

    //更新博客
    if(method==='POST'&&req.path==='/api/blog/update'){
        const result=updateBlog(id.req.body)
        return result.then(val=>{
            if(val){
                return new SuccessModel()
            }else{
                return new errorModel('更新失败')
            }
        })

    }

    //删除博客
    if(method==='POST'&&req.path==='/api/blog/delete'){
        const author='Bob'
        const result=deleteBlog(id,author)
        return result.then(val=>{
            if(val){
                return new SuccessModel()
            }else{
                return new errorModel('删除博客失败')
            }
        })
        
    }
}

module.exports=handleBlogRouter
const handleBlogRouter=require('./src/router/blog')
const handleUserRouter=require('./src/router/user')


const serverHandle =(req,res)=>{
    req.setHeader('content-type','application/json')
    //获取path
    const url=req.url
    req.path=url.split('?')[0]

    //处理blog路由
    const blogData=handleBlogRouter(req,res)
    if(blogData){
        res.end(
            JSON.stringify(blogData)
        )
        return
    }

    //处理user路由

    const userData=handleUserRouter(res,req)
    if(userData){
        res.end(
            JSON.stringify(blogData)
        )
        return 
    }

    //未命中任何路由,返回404
    res.write(404,{"content-type":"text/plain"})
    res.write("404 nothing is found")
    res.end()
}
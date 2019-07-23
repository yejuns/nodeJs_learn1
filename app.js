const handleBlogRouter=require('./src/router/blog')
const handleUserRouter=require('./src/router/user')
const querystring=require('querystring')

//用于处理 postdata
const getPostData=(req)=>{
    const promise=new Promise((resolve,reject)=>{
        if(req.method!=='POST'){
            resolve({})
            return 
        }
        if(req.headers['content-type']!=='application/json'){
            resolve({})
            return
        }
        let postdata=''
        req.on('data',chunk=>{
            postdata+=chunk
        })
        req.on('end',()=>{
            if(!postdata){
                resolve({})
                return 
            }
            resolve(
                JSON.parse(postdata)
            )
        })
    })
    return promise
}

const serverHandle =(req,res)=>{
    req.setHeader('content-type','application/json')
    //获取path
    const url=req.url
    req.path=url.split('?')[0]

    //解析query
    req.query=querystring.parse(url.split('?')[1])

    //处理POSTData
    
    getPostData(req).then(postdata=>{
        req.body=postdata
        // const blogData=handleBlogRouter(req,res)
        // if(blogData){
        //     res.end(
        //         JSON.stringify(blogData)
        //     )
        //     return
        // }
        //处理blog路由
        const blogData=handleBlogRouter(req,res)
        if(blogData){
            blogData.then(blogData=>{
                res.end(
                    JSON.stringify(blogData)
                )
            })
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

    })

    //处理blog路由
    const blogResult=handleBlogRouter(req,res)
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
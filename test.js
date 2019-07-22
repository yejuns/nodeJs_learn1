const http=require('http')
const querystring=require('querystring')

const server=http.createServer((req,res)=>{
    const method=req.method
    const url=req.url
    const path=url.split('?')[0]
    const query=querystring.parse(url.split('?')[1])
    
    res.setHeader('content-type','application/json')
    const resData={
        method,
        url,
        path,
        query
    }
    if(method==='GET'){
        res.end(
            JSON.stringify(resData)
        )
    }
    if(method==='POST'){
        let postData=''
        req.on('data',chunk=>{
            postData+=chunk.toString()
        })
        req.on('end',()=>{
            resData.postData=postData
            res.end(
                JSON.stringify(resData)
            )
        })
    }
})

//发送get数据
// const server=http.createServer((req,res)=>{
//     console.log(req.method)
//     const url=req.url
//     console.log('url',url)
//     req.query=querystring.parse(url.split('?')[1])
//     res.end(
//         JSON.stringify(req.query)
//     )
// })

//发送post数据
// const server=http.createServer((req,res)=>{
//     console.log("hello")
//     if (req.method==='POST'){
//         console.log("content-type is ",req.headers['content-type'])
//         let postData=''
//         req.on('data',chunk=>{
//             postData+=chunk.toString() 
//         })
//         req.on('end',()=>{
//             console.log('response',postData) 
//             res.end("hello world")
//         })
//     }

// })

server.listen(8800)
console.log("ok")
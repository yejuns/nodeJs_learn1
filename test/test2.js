const fs=require('fs')
const path=require('path')

/*
const fullFileName =path.resolve(__dirname,'file','a.json')
fs.readFile(fullFileName,(err,data)=>{
    if(err){
        console.error(err)
        return
    }
    console.log(data.toString())
})


//callback方式获得文件内容

function getFileContent(fileName,callback){
    const fullFileName=path.resolve(__dirname,'file',fileName)
    fs.readFile(fullFileName,(err,data)=>{
        if(err){
            console.error(err)
            return 
        }
        callback(
            JSON.parse(data.toString())
        )
    })
}

getFileContent('a.json',aData=>{
    console.log('a.json',aData)
    getFileContent(aData.next,bData=>{
        console.log('b.data',bData)
    })
})
*/

//用promise获取文件内容

function getFileContent(fileName){
    const promise=new Promise((resolve,reject)=>{
        const fullFileName=path.resolve(__dirname,'file',fileName)
        fs.readFile(fullFileName,(err,data)=>{
            if(err){
               reject(err)
                return 
            }
            resolve(
                JSON.parse(data.toString())
            )
        })
    })
    return promise
}

getFileContent('a.json').then(aData=>{
    console.log('a.data',aData)
    return getFileContent(aData.next)
}).then(bData=>{
    console.log('bdata is',bData)
    return getFileContent(bData.next)
}.then(cData=>{
    console.log('c data is',cData)
})

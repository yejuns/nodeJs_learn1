const getList=(author,keyword)=>{
    return[
        {
            id:1,
            title:'标题1',
            content:"内容",
            createTime:1563785809526,
            author:"Bob"
        },
        {
            id:2,
            title:'标题1',
            content:"内容",
            createTime:1563785808526,
            author:"Lili"
        },
    ]
}

module.exports={
    getList
}
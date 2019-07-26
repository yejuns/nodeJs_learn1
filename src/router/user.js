const {loginCheck}=require('../controller/user')
const {successModel,errorModel}=require('../model/resModel')

const handleUserRouter=(req,res)=>{
    const method=req.method

    //登录
    if(method==='POST'&&req.path==='/api/user/login'){ 
        const { username, password }=req.body
        const result=loginCheck(username,password)
        return result.then(data=>{
            if(data.username){
                return new successModel()
            }
            return new errorModel('登录失败')
        })
    }
}

module.exports=handleUserRouter
class BaseModel{
    //data是一个对象，message是字符串
    //以这样的方式保证输入的兼容性
    constructor(data,message){
        if(typeof data==='string'){
            this.message=data
            message=null
            data=null
        }
        if(data){
            this.data=data
        }
        if(message){
            this.message=message
        }

    }
}

class SuccessModel extends BaseModel{
    constructor(data,message){
        super(data.message)
        this.errno=0
    }
}

class ErrorModel extends BaseModel{
    constructor(data,message){
        super(data,message)
        this.errno=-1
    }
}

module.exports={
    SuccessModel,
    ErrorModel
}
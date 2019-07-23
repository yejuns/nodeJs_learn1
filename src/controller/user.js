const loginCheck=(username,password)=>{
    if(username=='Bob'&&password=='123'){
        return true
    }
    return false
}

module.exports={
    loginCheck
}
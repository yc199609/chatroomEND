import User from '../model/user'

export const insert = function(obj){
    var user = new User({
        userName: obj.userName,
        password: obj.password,
        phone: obj.phone,
        isdel: false
    })
    return new Promise((resolve,reject)=>{
        user.save((err,res)=>{
            if(err){
                reject({
                    code: 100,
                    msg: '错误',
                    data: res
                })
            }else{
                resolve({
                    code: 0,
                    msg: '成功',
                    data: res
                })
            }
        })
    })
}

export const update = function(obj){
    // 更新的条件
    var whereStr = { _id: obj.id }
    // 执行更新的数据
    var updateStr = { 
        userName: obj.userName,
        password: obj.password,
        phone: obj.phone
    }
    return new Promise((resolve,reject)=>{
        User.updateOne(whereStr,updateStr,(err,res)=>{
            if(err){
                reject({
                    code:100,
                    msg:'错误',
                    data: err
                })
            }else{
                resolve({
                    code:0,
                    msg:'成功',
                    data:res
                })
            }
        })
    })
}

export const deleteUser = function(obj){
    // 更新的条件
    var whereStr = { _id: obj.id }
    // 执行更新的数据
    var updateStr = { isdel: true }
    return new Promise((resolve,reject)=>{
        User.updateOne(whereStr,updateStr,(err,res)=>{
            if(err){
                reject({
                    code:100,
                    msg:'错误',
                    data: err
                })
            }else{
                resolve({
                    code:0,
                    msg:'成功',
                    data:res
                })
            }
        })
    })
}

export const find = function(obj){
    var whereStr = {
        userName: obj.userName,
        password: obj.password,
        isdel:false 
    }
    return new Promise((resolve,reject)=>{
        User.findOne(whereStr,(err,res)=>{
            if(err){
                reject({
                    code: 100,
                    msg: '错误',
                    data: err
                })
            }else if(!res){
                resolve({
                    code: 400,
                    msg: "用户名密码错误",
                    data: res
                })
            }else{
                resolve({
                    code: 0,
                    msg:"成功",
                    data: res
                })
            }
        })
    })
} 
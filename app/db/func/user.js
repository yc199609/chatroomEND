import User from '../model/user'

export const insert = function(obj){
    var item = new User({
        userName: obj.userName,
        password: obj.password,
        phone: obj.phone,
        isdel: false
    })
    return new Promise((resolve,reject)=>{
        item.save((err,res)=>{
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
        Item.updateOne(whereStr,updateStr,(err,res)=>{
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
        Item.updateOne(whereStr,updateStr,(err,res)=>{
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
        Item.findOne(whereStr,(err,res)=>{
            if(err){
                reject({
                    code: 100,
                    msg: '错误',
                    data: err
                })
            }else{
                resolve({
                    code: 0,
                    msg: "成功",
                    data: res
                })
            }
        })
    })
} 
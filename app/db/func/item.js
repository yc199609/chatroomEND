import Item from '../model/item'

export const insert = function(obj){
    var item = new Item({
        title: obj.title,
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
    var updateStr = { title: obj.title }
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

export const deleteItem = function(obj){
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

export const find = function(title){
    var whereStr = title ? { title, isdel:false } : { isdel:false }
    return new Promise((resolve,reject)=>{
        Item.find(whereStr,(err,res)=>{
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
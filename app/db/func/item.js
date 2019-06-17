import Item from '../model/item'

export const insert = function(obj) {
  var item = new Item({
    title: obj.title,
    user: obj.userId,
    isdel: false
  })
  return new Promise((resolve, reject) => {
    item.save((err, res) => {
      if (err) {
        reject({
          code: 100,
          msg: '错误',
          data: err
        })
      } else {
        resolve({
          code: 0,
          msg: '成功',
          data: res
        })
      }
    })
  })
}

export const update = function(obj) {
  // 更新的条件
  var whereStr = { _id: obj.id }
  // 执行更新的数据
  var updateStr = { title: obj.title }
  return new Promise((resolve, reject) => {
    Item.updateOne(whereStr, updateStr, (err, res) => {
      if (err) {
        reject({
          code: 100,
          msg: '错误',
          data: err
        })
      } else {
        resolve({
          code: 0,
          msg: '成功',
          data: res
        })
      }
    })
  })
}

export const deleteItem = function(obj) {
  // 更新的条件
  var whereStr = { _id: obj.id }
  // 执行更新的数据
  var updateStr = { isdel: true }
  return new Promise((resolve, reject) => {
    Item.updateOne(whereStr, updateStr, (err, res) => {
      if (err) {
        reject({
          code: 100,
          msg: '错误',
          data: err
        })
      } else {
        resolve({
          code: 0,
          msg: '成功',
          data: res
        })
      }
    })
  })
}

export const find = function(userid) {
  return new Promise((resolve, reject) => {
    var whereStr = userid ? { user: userid, isdel: false } : { isdel: false }
    Item.find(whereStr)
      .populate({ path: 'user', select: { userName: 1 }})
      .exec((err, obj) => {
        if (err) {
          reject({
            code: 100,
            msg: '错误',
            data: err
          })
        } else {
          resolve({
            code: 0,
            msg: '成功',
            data: obj
          })
        }
      })
  })
}

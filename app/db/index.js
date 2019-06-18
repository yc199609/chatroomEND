import mongoose from 'mongoose'
const DB_URL = 'mongodb://localhost:27017/yc'

mongoose.connect(DB_URL, { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false })

/**
  * 连接成功
  */
mongoose.connection.on('connected', function() {
  console.log('Mongoose connection open to ' + DB_URL)  
})

/**
 * 连接异常
 */
mongoose.connection.on('error', function(err) {
  console.log('Mongoose connection error: ' + err)  
})

module.exports = mongoose

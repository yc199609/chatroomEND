import mongoose from '../index'
const Schema = mongoose.Schema

const userSchema =  new Schema({
    userName: String,
    password: String,
    phone: Number,
    isdel: Boolean
})

export default mongoose.model('User',userSchema)
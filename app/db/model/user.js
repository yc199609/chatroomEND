import mongoose from '../index'
const Schema = mongoose.Schema

const userSchema = new Schema({
  userName: { type: String, required: true },
  password: { type: String, required: true },
  phone: { type: Number, required: true, unique: true, dropDups: true },
  isdel: Boolean
})

export default mongoose.model('User', userSchema)

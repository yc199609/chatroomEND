import mongoose from '../index'
const Schema = mongoose.Schema

const departmentSchema =  new Schema({
    id: String, // 部门编号
    name: String //名称
})

export default mongoose.model('Department',departmentSchema)
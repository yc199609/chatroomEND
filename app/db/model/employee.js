import mongoose from '../index'
const Schema = mongoose.Schema

const employeeSchema  =  new Schema({
    id: Number, //工号
    name: String, //姓名
    sex: Number, //性别
    age: Number, //年龄
    dep: {
        type: Schema.Types.ObjectId,
        ref: 'Department'
    }
})

export default mongoose.model('Employee',employeeSchema)
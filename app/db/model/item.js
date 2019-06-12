import mongoose from '../index'
const Schema = mongoose.Schema

const itemSchema =  new Schema({
        isdel:Boolean,
        title: String
})

export default mongoose.model('Item',itemSchema)
import mongoose from '../index'
const Schema = mongoose.Schema

const itemSchema =  new Schema({
        isdel: Boolean,
        title: { type: String, required: true },
        user: {
                type: Schema.Types.ObjectId,
                required: true,
                ref: 'User'
        }
})

export default mongoose.model('Item',itemSchema)
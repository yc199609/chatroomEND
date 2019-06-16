import 'body-parser'
import koaRouter from 'koa-router'
import { update, deleteItem } from '../db/func/item'

const router = koaRouter()

// router.get('/api/item/getList',async(ctx,next)=>{
//     let result = await find(ctx.query.userid)
//     ctx.body = result
// })

router.post('/api/item/deteleItem',async(ctx,next)=>{
    const result = await deleteItem(ctx.request.body)
    ctx.body = result
})

router.post('/api/item/updateItem',async(ctx,next)=>{
    const result = await update(ctx.request.body)
    ctx.body = result
})

export default router

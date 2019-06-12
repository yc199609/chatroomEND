import 'body-parser'
import koaRouter from 'koa-router'
import { insert, find, update, deleteUser } from '../db/func/user'

const router = koaRouter()

router.get('/api/user/getList',async(ctx,next)=>{
    let result = await find(ctx.query.title)
    ctx.body = result
})
router.post('/api/user/addUser',async(ctx,next)=>{
    const result = await insert(ctx.request.body)
    ctx.body = result
})
router.post('/api/user/deteleUser',async(ctx,next)=>{
    const result = await deleteUser(ctx.request.body)
    ctx.body = result
})
router.post('/api/user/updateUser',async(ctx,next)=>{
    const result = await update(ctx.request.body)
    ctx.body = result
})

export default router

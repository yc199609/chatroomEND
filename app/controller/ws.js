import 'body-parser'
import koaRouter from 'koa-router'
import { insert, find } from '../db/func/item'

const router = koaRouter()

const ctxArr =[]

router.all('/ws',async(ctx)=>{
    let result = await find()
    ctx.websocket.send(JSON.stringify(result))
    ctxArr.push(ctx)
    ctx.websocket.on('message',async(message)=>{
        await insert(JSON.parse(message))
        let inserted = await find()
        for(let i = 0, len = ctxArr.length; i < len; i++){
            ctxArr[i].websocket.send(JSON.stringify(inserted))
        }
    })
})

export default router

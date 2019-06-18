import 'body-parser'
import koaRouter from 'koa-router'
import { insert, find } from '../db/func/item'

const router = koaRouter()

const ctxArr =[]

router.all('/ws',async(ctx)=>{
    console.log(2)
    let result = await find()
    ctx.websocket.send(JSON.stringify(ctx.websocket))
    ctxArr.push({ws:ctx.websocket,user:ctx.cookies.get('UserId')})

    for(var i = ctxArr.length;i>=0;i--){
        if(ctxArr[i].user===ctx.cookies.get('UserId')){
            ctxArr[i].ws.close()
            ctxArr.splice(i,1)
            break
        }
    }

    ctx.websocket.on('message',async(message)=>{
        await insert(JSON.parse(message))
        let inserted = await find()
        for(let i = 0, len = ctxArr.length; i < len; i++){
            ctxArr[i].websocket.send(JSON.stringify(inserted))
        }
    })
})

export default router

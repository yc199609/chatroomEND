import 'body-parser'
import koaRouter from 'koa-router'
import { insert, find } from '../db/func/item'

const router = koaRouter()

let ctxArr =[]

router.all('/ws',async(ctx)=>{
    let result = await find()
    ctx.websocket.send(JSON.stringify(result))

    ctxArr = [...ctxArr.filter((item)=>{
        if(item.ws.readyState>1){
            return false
        } else {
            return true
        }
    })] 

    ctxArr.push({ws:ctx.websocket,user:ctx.cookies.get('UserId')})

    ctx.websocket.on('message',async(message)=>{
        await insert(JSON.parse(message))
        let inserted = await find()
        for(let i = 0, len = ctxArr.length; i < len; i++){
            ctxArr[i].ws.send(JSON.stringify(inserted))
        }
    })
})

export default router

import Koa from 'koa';
import bodyParser from 'koa-bodyparser'
import itemRouter from './controller/item'
import userRouter from './controller/user'
import koaStatic from 'koa-static'
const  route = require('koa-route') 
import websockify from 'koa-websocket' 


const app = websockify(new Koa()) 
app.use(bodyParser())

app.use(koaStatic(__dirname  + '/public'))

app.use(itemRouter.routes())
app.use(userRouter.routes())

app.ws.use(function(ctx, next) {
    // return `next` to pass the context (ctx) on to the next ws middleware
    return next(ctx);
});

app.ws.use(route.all('/ws',function(ctx){
    ctx.websocket.send('hello world')
    ctx.websocket.on('message',function(message){
        console.log(message)
    })
}))

app.listen(3000);
import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import itemRouter from './controller/item'
import userRouter from './controller/user'
import wsRouter from './controller/ws'
import koaStatic from 'koa-static'
import path from 'path'

// const  route = require('koa-route')
import websockify from 'koa-websocket'

const app = websockify(new Koa())
app.use(bodyParser())

app.use(koaStatic(path.join(__dirname, '/public')))

app.use(userRouter.routes())
app.use(itemRouter.routes())

app.ws.use(function(ctx, next) {
  // return `next` to pass the context (ctx) on to the next ws middleware
  return next(ctx)
})

app.ws.use(wsRouter.routes())

app.listen(3000)

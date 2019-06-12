import Koa from 'koa';
import bodyParser from 'koa-bodyparser'
import itemRouter from './controller/item'
import userRouter from './controller/user'
import koaStatic from 'koa-static'

const app = new Koa();
app.use(bodyParser())

app.use(koaStatic(__dirname  + '/public'))

app.use(itemRouter.routes())
app.use(userRouter.routes())

app.listen(3000);
import Koa from 'koa';
import bodyParser from 'koa-bodyparser'
import itemRouter from './controller/item'
import userRouter from './controller/user'
import koaStatic from 'koa-static'
import Dep from './db/model/department'
import Employee from './db/model/employee'

const app = new Koa();
app.use(bodyParser())

app.use(koaStatic(__dirname  + '/public'))

app.use(itemRouter.routes())
app.use(userRouter.routes())

var dep1 = new Dep({
    "id":"1001",
    "name":"市场部"
})
var dep2 = new Dep({
    "id":"1002",
    "name":"销售部"
})
var dep3 = new Dep({
    "id":"1003",
    "name":"行政部"
})
// dep1.save()
// dep2.save()
// dep3.save()


var employee1 = new Employee({
    "id":"001",
    "name":"jack",
    "sex":1,
    "age":23,
    "dep":"593667c4ec59b38aefdc25b5"
})
var employee2 = new Employee({
    "id":"002",
    "name":"tom",
    "sex":2,
    "age":23,
    "dep":"593667c4ec59b38aefdc25b6"
})
var employee3 = new Employee({
    "id":"003",
    "name":"kan",
    "sex":1,
    "age":43,
    "dep":"593667c4ec59b38aefdc25b5"
})
var employee4 = new Employee({
    "id":"004",
    "name":"julis",
    "sex":2,
    "age":23,
    "dep":"593667c4ec59b38aefdc25b7"
})
var employee5 = new Employee({
    "id":"005",
    "name":"michael",
    "sex":1,
    "age":43,
    "dep":"593667c4ec59b38aefdc25b5"
})
var employee6 = new Employee({
    "id":"006",
    "name":"jordan",
    "sex":1,
    "age":25,
    "dep":"593667c4ec59b38aefdc25b5"
})
// employee1.save()
// employee2.save()
// employee3.save()
// employee4.save()
// employee5.save()
// employee6.save()

// Employee.find({})
//     .populate({ path: 'dep',select: {name: 1}})
//     .exec((err,obj)=>{
//         console.log(obj)
//     })




app.listen(3000);
const Koa = require('koa')
const app = new Koa()

app.use(ctx => ctx.body = index.html)
app.listen(3000)

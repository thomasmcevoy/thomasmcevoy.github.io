const Koa = require('koa')
const app = new Koa()

app.use(require('koa-static')('./index.html'))
app.listen(3000)

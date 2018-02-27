const Koa = require('koa')
const app = new Koa()

app.use(require('koa-static')('/home/thomas/thomasmcevoy.github.io/dist'))
app.listen(3000)

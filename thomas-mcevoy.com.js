'use strict'

const Koa = require('koa')
const app = new Koa()

app.use(require('koa-static')('./dist'))
app.listen(3000)

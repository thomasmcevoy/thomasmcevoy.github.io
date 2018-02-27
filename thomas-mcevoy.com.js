'use strict'

const Koa = require('koa')
const app = new Koa()
const index = require('./index.html')

app.use(ctx => ctx.body = index)
app.listen(3000)

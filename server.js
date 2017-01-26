const koa = require('koa')

const app = koa()

app.use(function* () {
  this.body = '▲'
})

app.listen(3017)

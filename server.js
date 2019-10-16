// server.js
const next = require('next')
const routes = require('./routes')
const app = next({dev: process.env.NODE_ENV !== 'production'})
const handler = routes.getRequestHandler(app)
const port = process.env.PORT || 3001
// Without express
const {createServer} = require('http')
app.prepare().then(() => {
  createServer(handler).listen(port)
})
console.log(`Server listening at ${port} port`)
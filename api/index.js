const express = require('express')
const bodyParser = require('body-parser')
require('express-group-routes')

const app = express()
const port = 9090

app.use(bodyParser.json())

//controllers
const AuthController = require('./controllers/auth')
const UseraController = require('./controllers/user')

//middlewares
// const { authenticated } = require('./middleware')

app.group("/api/v1", (router) => {

    //auth API
    router.post('/login', AuthController.login)
    router.post('/register', UseraController.store)
})


app.listen(port, () => console.log(`Listening on port ${port}!`))
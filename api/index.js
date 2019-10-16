const express = require('express')
const bodyParser = require('body-parser')
require('express-group-routes')

const app = express()
const port = 9090

app.use(bodyParser.json())

//controllers
const AuthController = require('./controllers/auth')
const UseraController = require('./controllers/user')
const WebtoonsController = require('./controllers/webtoons')

//middlewares
const { authenticated } = require('./middleware')

app.group("/api/v1", (router) => {

    //auth API
    router.post('/login', AuthController.login)
    router.post('/register', UseraController.store)
    router.get('/webtoons', authenticated, WebtoonsController.index)
    router.get('/webtoons/favorite', authenticated, WebtoonsController.favorite)
    router.get('/webtoons/:title', WebtoonsController.title)
    router.get('/webtoon/:id/episodes', WebtoonsController.episodes)
})


app.listen(port, () => console.log(`Listening on port ${port}!`))
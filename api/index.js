const express = require('express')
const bodyParser = require('body-parser')
require('express-group-routes')

const app = express()
const port = 9090

app.use(bodyParser.json())

//controllers
const AuthController = require('./controllers/auth')
const UserController = require('./controllers/user')
const WebtoonsController = require('./controllers/webtoons')

//middlewares
const { authenticated } = require('./middleware')

app.group("/api/v1", (router) => {

    //auth API
    router.post('/login', AuthController.login)
    router.post('/register', UserController.store)
    router.get('/user/:user_id/webtoons', WebtoonsController.user)
    router.get('/webtoons', authenticated, WebtoonsController.index)
    router.get('/webtoon/:id/episodes', WebtoonsController.episodes)
    router.get('/webtoon/:id_webtoon/episode/:id_episode', WebtoonsController.pages)

})


app.listen(port, () => console.log(`Listening on port ${port}!`))
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
    
    router.get('/webtoons', authenticated, WebtoonsController.index)
    router.get('/webtoon/:id/episodes', authenticated, WebtoonsController.episodes)
    router.get('/webtoon/:id_webtoon/episode/:id_episode', authenticated, WebtoonsController.pages)

    router.get('/user/:id_user/webtoons', authenticated, WebtoonsController.user)
    router.post('/user/:id_user/webtoon', authenticated, WebtoonsController.userPost)
    router.patch('/user/:id_user/webtoon/:id_webtoon', authenticated, WebtoonsController.updateWebtoon)
})


app.listen(port, () => console.log(`Listening on port ${port}!`))
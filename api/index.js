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

    router.post('/login', AuthController.login)
    router.post('/register', UserController.store)
    
    router.get('/webtoons', WebtoonsController.index)
    router.get('/webtoon/:id/episodes', WebtoonsController.episodes)
    router.get('/webtoon/:id_webtoon/episode/:id_episode', WebtoonsController.pages)

    router.get('/user/:id_user/webtoons', authenticated, WebtoonsController.user)
    router.post('/user/:id_user/webtoon', authenticated, WebtoonsController.userPost)
    router.patch('/user/:id_user/webtoon/:id_webtoon', authenticated, WebtoonsController.updateWebtoon)
    router.delete('/user/:id_user/webtoon/:id_webtoon', authenticated, WebtoonsController.deleteWebtoon)
    router.post('/user/:id_user/webtoon/:id_webtoon/episode', authenticated, WebtoonsController.createEpisode)
    router.patch('/user/:id_user/webtoon/:id_webtoon/episode/:id_episode', authenticated, WebtoonsController.updateEpisode)
    router.delete('/user/:id_user/webtoon/:id_webtoon/episode/:id_episode', authenticated, WebtoonsController.deleteEpisode)
    router.post('/user/:id_user/webtoon/:id_webtoon/episode/:id_episode/image', authenticated, WebtoonsController.createImage)
    router.delete('/user/:id_user/webtoon/:id_webtoon/episode/:id_episode/image/:id_image', authenticated, WebtoonsController.deleteImage)
})


app.listen(port, () => console.log(`Listening on port ${port}!`))
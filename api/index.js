const express = require('express')
const bodyParser = require('body-parser')
require('express-group-routes')

const app = express()
const port = 9090

app.use(bodyParser.json())

//controllers
const AuthController = require('./controllers/auth')
const WebtoonsController = require('./controllers/webtoons')

//middlewares
const { authenticated } = require('./middleware')

app.group("/api/v1", (router) => {
    router.post('/signin', AuthController.signin)
    router.post('/signup', AuthController.signup)
    
    router.get('/webtoons', WebtoonsController.webtoons)
    router.get('/webtoon/:webtoon_id/episodes', WebtoonsController.episodes)
    router.get('/webtoon/:webtoon_id/episode/:episode_id', WebtoonsController.pages)

    router.get('/user/:user_id/webtoons', authenticated, WebtoonsController.user)
    router.post('/user/:user_id/webtoon', authenticated, WebtoonsController.userPost)
    router.patch('/user/:user_id/webtoon/:webtoon_id', authenticated, WebtoonsController.updateWebtoon)
    router.delete('/user/:user_id/webtoon/:webtoon_id', authenticated, WebtoonsController.deleteWebtoon)
    router.post('/user/:user_id/webtoon/:webtoon_id/episode', authenticated, WebtoonsController.createEpisode)
    router.patch('/user/:user_id/webtoon/:webtoon_id/episode/:episode_id', authenticated, WebtoonsController.updateEpisode)
    router.delete('/user/:user_id/webtoon/:webtoon_id/episode/:episode_id', authenticated, WebtoonsController.deleteEpisode)
    router.post('/user/:user_id/webtoon/:webtoon_id/episode/:episode_id/image', authenticated, WebtoonsController.createImage)
    router.delete('/user/:user_id/webtoon/:webtoon_id/episode/:episode_id/image/:image_id', authenticated, WebtoonsController.deleteImage)
})


app.listen(port, () => console.log(`Listening on port ${port}!`))
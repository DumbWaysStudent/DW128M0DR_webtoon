const models = require('../database/models')
const User = models.user
const Webtoon = models.webtoons
const Episodes = models.episodes
const Pages = models.pages

module.exports = {
index : (req,res) => {
    Webtoon.findAll({
       include: [{
           as: "created",
           model: User
       }
     ]
   }).then(webtoons=>res.send(webtoons))
 },
 
 favorite:(req,res) => {
     Webtoon.findAll({
         where:{
             isFavorite:true
         }
     }).then(webtoons => res.send(webtoons))
 },

title:(req,res) => {
    Webtoon.findOne({
        where:{
            title:req.params.title
        }
    }).then(webtoons => res.send(webtoons))
},

episodes:(req,res) => {
    Episodes.findAll({
        where:{webtoon_id:req.params.id}        
    }).then(webtoons => res.send(webtoons))
},

pages:(req,res) => {
    Pages.findAll({
        include:[{
            model:Episodes,
            where:{
                webtoon_id:req.params.id_webtoon,
                id:req.params.id_episode
            }
        }]
    }).then(webtoons=>res.send(webtoons))
}
}
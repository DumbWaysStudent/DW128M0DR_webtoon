const Sequelize = require('sequelize')
const models = require('../database/models')
const User = models.user
const Webtoon = models.webtoons
const Episodes = models.episodes
const Pages = models.pages
const Op = Sequelize.Op

module.exports = {
user:(req, res) => {
    const { id_user } = req.params
    Webtoon.findOne({
        where: { id: id_user },
          include: [{
            model: User,
            as:"created"
        }]
    }).then(posts=>
        res.send(posts)
    ).catch(err => {
        console.log(err)
    })
},
index:(req,res) => {
     const {favorite, title} = req.query
     if(favorite=="true"){
        Webtoon.findAll({
            where:{
                isFavorite:true
            }
        }).then(webtoons => res.send(webtoons))
     } else if(favorite == "false"){
         Webtoon.findAll({
             where:{
                 isFavorite:false
             }
         }).then(webtoons => res.send(webtoons))
     } else if(title){
        Webtoon.findAll({
            where  : {
                title : { [Op.like] : `%${title}%` }
              }
        }).then(webtoons => res.send(webtoons))
     } else {
         Webtoon.findAll().then(webtoons => res.send(webtoons))
     }
     
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
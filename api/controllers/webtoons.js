const Sequelize = require('sequelize')
const models = require('../database/models')
const User = models.user
const Webtoon = models.webtoons
const Episodes = models.episodes
const Pages = models.pages
const Op = Sequelize.Op

module.exports = {
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
},
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
userPost:(req, res) => {
    const { id_user } = req.params
    const {title,genre,isFavorite,image} = req.body 
    User.findAll({
        where: { 
            id: id_user,
        }
    }).then(() => {
        Webtoon.create({
            title:title,
            genre:genre,
            isFavorite:isFavorite,
            image:image,
            createBy:req.body.createBy
        }).then(webtoons => res.send(webtoons))
    }).catch(err => {
        console.log(err)
    })
},

updateWebtoon:(req,res) => {
    const { id_user, id_webtoon } = req.params
    const {title,genre,isFavorite,image} = req.body 
    console.log(id_user + " " + id_webtoon)
    Webtoon.findAll({
        where: { 
            id: id_webtoon,
            createBy:id_user
        }
    }).then(() => {
        Webtoon.update({
                title:title,
                genre:genre,
                isFavorite:isFavorite,
                image:image
        },{
            where:{
                id:id_webtoon
            }
        }).then(webtoons => res.send(webtoons))
    })
},

deleteWebtoon:(req,res) => {
    const { id_user, id_webtoon } = req.params
    Webtoon.findAll({
        where: { 
            createBy:id_user
        }
    }).then(()=>{
        Webtoon.destroy({
            where:{
                id:id_webtoon
            }
        }).then((webtoons) => res.send({
            message: "success",
            webtoons : id_webtoon
        }))
    })
},

createEpisode:(req, res) => {
    User.findAll({
        where: { 
            id: req.params.id_user,
        }
    }).then(()=>{
        Episodes.create({
                title:req.body.title,
                image:req.body.image,
                webtoon_id:req.params.id_webtoon
        })
    }).then(webtoons => res.send(webtoons))
},

updateEpisode:(req,res) => {
    const { id_user, id_webtoon, id_episode } = req.params
    User.findAll({
        where: { 
            id: id_user,
        }
    }).then(() => {
        Episodes.update({
            title:req.body.title,
            image:req.body.image,
            webtoon_id:id_webtoon
        },{
            where:{
                id:id_episode
            }
        }).then(webtoons => res.send(webtoons))
    })
}
}
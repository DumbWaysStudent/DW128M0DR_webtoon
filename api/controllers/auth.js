const jwt = require('jsonwebtoken')

const models = require('../database/models')
const User = models.user

module.exports = {
    signin : (req, res) => {    
    const {email, password} = req.body
    
    User.findOne({where: {email, password}}).then(user=>{
        if(user){
            const token = jwt.sign({ userId: user.id }, 'my-secret-key')
            res.send({
                user : user.name,
                email,
                token
            }) 
        } else {
            res.send({
                error: true,
                message: "Wrong Email or Password!"
            })
        }
    })
    },
    
    signup : (req, res) => {
        const {email, password, name} = req.body
        const token = jwt.sign({ email: email}, 'my-secret-key')
       
        User.findOrCreate({
            where: {email}, 
            defaults: {
                password,
                name
            }
        }).then( ([user, created]) => {
          if(created) {
              res.send({
                  name,
                  email,
                  token
                  
              })
          } else {
              res.send({
                  message: "Email already exists"
              })
          }
        })
    }
}
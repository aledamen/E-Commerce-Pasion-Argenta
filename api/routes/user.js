const express = require("express")
const Users = require("../models/Users")
const router = express.Router()

// registrar un usuario
router.post("/register/", (req, res) => {
    const createUser = new Users(req.body)
    const user = createUser.save()
    .then(user=> res.status(201).send(user))   
  })

// buscar todos los usuarios
router.get("/all/",(req,res)=>{
    Users.find({})
    .sort({username:1 })
    .then(users => res.send(users) )
})

//buscar un usuario por id
router.get("/:id",(req,res,next)=>{
    const id = req.params.id
    Users.findOne({ _id: id})
    .then(user=>res.send(user))
    .catch(err=>next)
})

//buscar favoritos favoritos
router.get("/favorites/:id",(req,res,next)=>{
    const id = req.params.id
    Users.findOne({ _id: id})
    .then(user=>res.send(user.favorites))
    .catch(err=>next)
})

//eliminar un usuario
router.delete(("/:id",(req,res,next)=>{
    const id = req.params.id
    Users.deleteOne({ _id: id})
    .then(() => res.sendStatus(204))
    .catch(err => console.log(err))
}))


module.exports = router

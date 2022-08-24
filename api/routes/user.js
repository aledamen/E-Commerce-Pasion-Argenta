const express = require("express");
const UserController = require("../controllers/user.controller");
const Users = require("../models/Users");
const router = express.Router();

// registrar un usuario
router.post("/register/", UserController.createUser);

// buscar todos los usuarios
router.get("/all/", UserController.getAllUsers);

//buscar un usuario por id
router.get("/:id", UserController.getUser);

//buscar favoritos favoritos
router.get("/favorites/:id", (req, res, next) => {
  const id = req.params.id;
  Users.findOne({ _id: id })
    .then((user) => res.send(user.favorites))
    .catch((err) => next);
});

//ruta para modificar un usuario
router.put("/modify/",(req,res)=>{
    Users.updateOne({_id:req.body.id},{$set:req.body.mod})
    .then(()=>res.sendStatus(204))
})
//ruta para promover a admin
router.put("/toadmin/",(req,res)=>{
    Users.updateOne({_id:req.body.id},{$set:{isAdmin: req.body.toggle}})
    .then(()=>res.sendStatus(204))
})
//eliminar un usuario
router.delete("/delete/:id", (req, res) => {
    Users.deleteOne({ _id: req.params.id }).then((user) => {
      res.status(204).send(user);
    });
  });


module.exports = router;



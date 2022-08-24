const express = require("express");

const UserController = require("../controllers/user.controller");

const Products = require("../models/Products");

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

/////24/08 Cart routes 


//Add to the Cart
//Recibe User Id por params, Pid por Body.pid, cantidad agregada por body.amount
//El stock se validara antes de hacer checkout a la cart
//agrega nombre y id del producto a cart[] de users, el resto se trae dinamicamente de la tabla products para mantener stock y precio actualizado
//
router.put("/addtocart/:id", (req, res) => {
  Products.findById(req.body.pid, { name: 1, description: 1 })
  .then((product) => {
    console.log("aaaaa", product)
    Users.updateOne(
      { _id: req.params.id },
      {
        $push: {
          cart: {
            _id: product._id,
            name: product.name,
            amount: req.body.amount,
          },
        },
      }
    ).then(() => {
      res.status(201).send(product);
    });
  });
});
//Delete Product from Cart .
router.delete("/removefromcart/:id", (req, res) => {
    Users.updateOne({ _id: req.params.id }, {$pull: {cart: {_id:req.body.pid} }}).then((product) => {
    res.status(204).send(product);
  });
});

module.exports = router;


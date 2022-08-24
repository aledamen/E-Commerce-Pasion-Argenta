const express = require("express");
const Products = require("../models/Products");
const Users = require("../models/Users");
const router = express.Router();

// registrar un usuario
router.post("/register/", (req, res) => {
  const createUser = new Users(req.body);
  const user = createUser.save().then((user) => res.status(201).send(user));
});

// buscar todos los usuarios
router.get("/all/", (req, res) => {
  Users.find({})
    .sort({ username: 1 })
    .then((users) => res.send(users));
});

//buscar un usuario por id
router.get("/:id", (req, res, next) => {
  const id = req.params.id;
  Users.findOne({ _id: id })
    .then((user) => res.send(user))
    .catch((err) => next);
});

//buscar favoritos favoritos
router.get("/favorites/:id", (req, res, next) => {
  const id = req.params.id;
  Users.findOne({ _id: id })
    .then((user) => res.send(user.favorites))
    .catch((err) => next);
});

//eliminar un usuario
router.delete(
  ("/:id",
  (req, res, next) => {
    const id = req.params.id;
    Users.deleteOne({ _id: id })
      .then(() => res.sendStatus(204))
      .catch((err) => console.log(err));
  })
);

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
//Delete Product from Cart
router.delete("/removefromcart/:id", (req, res) => {
    Users.updateOne({ _id: req.params.id }, {$pull: {cart: {_id:req.body.pid} }}).then((product) => {
    res.status(204).send(product);
  });
});

module.exports = router;

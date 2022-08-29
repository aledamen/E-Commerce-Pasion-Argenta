const express = require("express");

const mongoose = require('mongoose');
const { isObjectIdOrHexString } = require("mongoose");


const UserController = require("../controllers/user.controller");
const Products = require("../models/Products");
const Users = require("../models/Users");
const router = express.Router();
const ObjectId = require("mongodb").ObjectId;
// registrar un usuario
router.post("/register/", UserController.createUser);

// buscar todos los usuarios
router.get("/all/", UserController.getAllUsers);

//buscar un usuario por id
router.get("/:id", UserController.getUser);

//buscar favoritos favoritos
router.get("/favorites/:id", UserController.getfavorites);

//ruta para modificar un usuario
router.put("/modify/", UserController.userModify)

//ruta para promover a admin
router.put("/toadmin/", UserController.putToAdmin)


//Add to the Cart
//Recibe User Id por params, product ID por body.pid, cantidad agregada por body.amount, si ya existe el producto en la cart, suma el amount a la linea existente(o resta si está en negativo)
//(El stock y el precio se validara antes de hacer checkout a la cart)

//(params id ex: http://localhost:3001/api/users/addtocart/630bc5b953cfd44ae2914109
// body ex:  { "pid":"6307bcd6c001a539fb32d748", "amount": 2}
router.put("/addtocart/:id", UserController.addToCart);

//Delete Product from Cart .
// recibe user id por params, y un objeto en body con pid, remueve la linea completamente. 
//(body ex: { "pid":"6307bcd6c001a539fb32d748"})

router.put("/removefromcart/:id", UserController.removeFromCart);

// Modify amount of product 
// Modifica la cantidad de un producto de una cart de un usuario.
//Recibe User Id por params, Pid por Body.pid, nueva cantidad por body.amount
//(body ex: {"pid":"6307bcd6c001a539fb32d751",  "amount":2 })

router.put("/modifycart/:id",UserController.modifyCart)

//find product in cart. Devuelve el objeto completo del user (obj dentro de un array) si es que encuentra dicho producto en la carta. Recibe user id por params, pid por body
// (body ex: { "pid":"6307bcd6c001a539fb32d751"})
router.get("/findincart/:id",UserController.findInCart);

//eliminar un usuario
router.delete("/delete/:id", UserController.deleteUser);



module.exports = router;
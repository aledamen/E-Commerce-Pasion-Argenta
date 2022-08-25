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
router.get("/favorites/:id", UserController.getfavorites);

//ruta para modificar un usuario
router.put("/modify/", UserController.userModify)

//ruta para promover a admin
router.put("/toadmin/", UserController.putToAdmin)

//eliminar un usuario
router.delete("/delete/:id", UserController.deleteUser);


module.exports = router;
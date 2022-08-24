const product = require("./product")
const auth = require ("./auth")
const express = require('express')
const router = express.Router()
const user = require("./user")

router.use ("/users", user)
router.use ("/products", product)
<<<<<<< HEAD

=======
router.use("/auth", auth)
>>>>>>> fef8e4f (agregar ruta de login)
module.exports = router;

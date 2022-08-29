const product = require("./product")
const auth = require ("./auth")
const express = require('express')
const router = express.Router()
const user = require("./user")

router.use ("/users", user)
router.use ("/products", product)
router.use("/auth", auth)

module.exports = router;

const product = require("./product")
const express = require('express')
const router = express.Router()
const user = require("./user")

router.use ("/users", user)
router.use ("/products", product)
module.exports = router;

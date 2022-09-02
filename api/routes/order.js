const express = require('express')
const OrderController = require('../controllers/order.controller')
const router = express.Router()

//To get all orders, (Admin)
router.get('/all', OrderController.findAllOrders)

//To get specific order
router.get('/orderid/:id', OrderController.findById)

//To get specific user orders
router.get('/userid/:id', OrderController.findByUserId)

module.exports = router

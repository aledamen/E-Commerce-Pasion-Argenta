const express = require('express')
const OrderController = require('../controllers/order.controller')
const router = express.Router()

router.get('/all', OrderController.findAllOrders)

router.get('/orderid/:id', OrderController.findById)

router.get('/userid/:id', OrderController.findByUserId)

module.exports = router

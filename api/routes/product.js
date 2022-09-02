const express = require('express')
const ProductController = require('../controllers/product.controller')
const router = express.Router()

router.post('/seed', ProductController.seedDb)

router.post('/create', ProductController.createProduct)

router.get('/all', ProductController.findAllProducts)

router.get('/search/:name', ProductController.findByName)

router.post('/category/', ProductController.findByCat)

router.post('/range', ProductController.findByRange)

router.get('/:pid', ProductController.findById)

router.put('/modify', ProductController.modifyProduct)

router.put('/review', ProductController.pushReviews)

router.delete('/delete/:id', ProductController.deleteProduct)

module.exports = router

const express = require('express')
const ProductController = require('../controllers/product.controller')
const router = express.Router()

//Too seed db. (recibe array de objetos) format: [{},{},{}]
router.post('/seed', ProductController.seedDb)

//Create products recibe el objeto con todos los datos requeridos
router.post('/create', ProductController.createProduct)

//Find all products in Alphabetical order
router.get('/all', ProductController.findAllProducts)

//Find  Product by name.
//solucionar case sentitive *** Solucionado
router.get('/search/:name', ProductController.findByName)

//Find all products, by category only (body ex: {"cat": "Accesorios"})
router.post('/category/', ProductController.findByCat)

//Find all products, price range( lowest/highest) and category, (body ex: "{"low":300,"high":100,"cat": "Accesorios"}")
router.post('/range', ProductController.findByRange)

//Find Specific Product by id
// Recibe por parametro el id del producto
router.get('/:pid', ProductController.findById)

//Update Product (body ex: {"id":"6307bc9bc001a539fb32d743", "mod":{"stock":"222"}}
router.put('/modify', ProductController.modifyProduct)

//Update and push reviews
//(body ex:  {"id":"6307bc9bc001a539fb32d743","review": {"review": "esta buena","userId": "630bc5b953cfd44ae2914109","rating": 4}}  )
router.put('/review', ProductController.pushReviews)

//delete
router.delete('/delete/:id', ProductController.deleteProduct)

module.exports = router

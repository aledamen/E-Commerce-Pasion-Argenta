const express = require("express");
const ProductController = require("../controllers/product.controller");
const router = express.Router();
const Products = require("../models/Products");

//Too seed db. (recibe array de objetos)
router.post("/seed", ProductController.seedDb);

//Create products recibe el objeto con todos los datos necesarios al menos
router.post("/create", ProductController.createProduct);

//Find all products in Alphabetical order
router.get("/all", ProductController.findAllProducts);

//Find  Product by name.
//solucionar case sentitive ***
router.get("/search/:name", ProductController.findByName);

//Find all products, price range and category
router.get("/range", ProductController.findByRange);

//Find Specific Product by id
// Recibe por parametro el id del producto
router.get("/:pid", ProductController.findById);

//Find all products, price range and category
router.get("/range", ProductController.findByRange);

//Update Product (/*{"id":"6307bc9bc001a539fb32d743", "mod":{"stock":"222"}}*/
router.put("/modify", ProductController.modifyProduct);

//Update and push reviews
router.put("/review", ProductController.pushReviews);

//delete
router.delete("/delete/:id", ProductController.deleteProduct);

module.exports = router;
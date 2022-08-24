const express = require("express");
const router = express.Router();
const Products = require("../models/Products");


//Too seed db. (recibe array de objetos)
router.post("/products/seed", (req, res) => {
  Products.insertMany(req.body).then((product) => {
    res.status(201).send(product);
  });
});

//Create products
// recibe el objeto con todos los datos necesarios al menos
router.post("/products/create", (req, res) => {
  const products = new Products(req.body);
  products.save().then((user) => {
    res.status(201).send(user);
  });
});

//Find all products in Alphabetical order
router.get("/all", (req, res) => {
  Products.find()
    .sort({ name: 1 })
    .then((products) => {
      res.status(200).send(products);
    });
});

//Find  Product by name.
router.get("/products/search/:name", (req, res) => {
  Products.find({ name: { $regex: req.params.name } })
    .exec()

    .then((product) => {
      res.status(200).send(product);
    });
});

//Find Specific Product by id
// Recibe por parametro el id del producto
router.get("/products/:pid", (req, res) => {
  Products.find({ _id: req.params.pid }).then((product) => {
    res.status(200).send(product);
  });
});

//Find all products, price range and category
router.get("/products/range", (req, res) => {
  Products.find({
    price: { $gte: req.body.high, $lte: req.body.low },
    category: req.body.cat,
  })
    .sort({ price: 1 })
    .then((products) => {
      res.status(200).send(products);
    });
});

//Update Product (
//db.products.updateOne({req.body}) 
router.put("/products/modify", (req, res) => {
  Products.updateOne({ _id: req.body.id }, { $set: req.body.mod }).then(
    (product) => {
      res.status(201).send(product);
    }
  );
});

//Update and push reviews
router.put("/products/review", (req, res) => {
  Products.updateOne(
    { _id: req.body.id },
    { $push: { review: req.body.review } }
  ).then((product) => {
    res.status(201).send(product);
  });
});

//delete
router.delete("/products/delete/:id", (req, res) => {
    Products.deleteOne({ _id: req.params.id }).then((product) => {
    res.status(204).send(product);
  });
});

module.exports = router;
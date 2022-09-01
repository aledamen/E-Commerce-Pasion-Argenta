const ProductService = require("../services/product.services");

class ProductController {

    static async seedDb (req,res) {
        try {
           const product = await ProductService.seedDb(req.body)
           return res.status(201).send(product);
        } catch (error){
            console.log(error);
        }
    }

    static async createProduct (req,res) {
        try {
           const product = await ProductService.createProduct(req.body)
           return res.status(201).send(product);
        } catch (error){
            console.log(error);
        }
    }

    static async findAllProducts (req,res) {
        try {
           const product = await ProductService.findAllProducts()
           return res.status(200).send(product);
        } catch (error){
            console.log(error);
        }
    }

    static async findByName (req,res) {
        try {
           const product = await ProductService.findByName(req.params.name)
           return res.status(200).send(product);
        } catch (error){
            console.log(error);
        }
    }

    static async findById (req,res) {
        try {
           const product = await ProductService.findById(req.params.pid)
           return res.status(200).send(product);
        } catch (error){
            console.log(error);
        }
    }

    static async findByRange (req,res) {
        try {
            const product = await ProductService.findByRange(req.body)
            return res.status(200).send(product);
        } catch (error){
            console.log(error);
        }
    }

    static async findByCat (req,res) {
        try {
            const products = await ProductService.findByCat(req.body)
            return res.status(200).send(products);
        } catch (error){
            console.log(error);
        }
    }

    static async modifyProduct (req,res) {
        try {
            const product = await ProductService.modifyProduct(req.body)
            return res.status(201).send(product);
        } catch (error){
            console.log(error);
        }
    }

    static async pushReviews (req,res) {
        try {
            const product = await ProductService.pushReviews(req.body)
            return res.status(201).send(product);
        } catch (error){
            console.log(error);
        }
    }

    static async deleteProduct (req,res) {
        try {
            const product = await ProductService.deleteProduct(req.params.id)
            console.log("asssssssssss",product);
            return res.status(204).send(product);
        } catch (error){
            console.log(error);
        }
    }
    
}

module.exports = ProductController
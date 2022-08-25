const Products = require("../models/Products");

class ProductService {
    static async seedDb(body) {
        try {
            return await Products.insertMany(body)
        } catch (error) {
            console.log(error);
        }
    }

    static async createProduct(body) {
        try {
            const products = new Products(body)
            return await products.save()
        } catch (error) {
            console.log(error);
        }
    }

    static async findAllProducts() {
        try {
            return await Products.find()
            .sort({ name: 1 })
        } catch (error) {
            console.log(error);
        }
    }

    static async findByName(name) {
        try {
            return await Products.find({name:{$regex:name}})
            .exec()
        } catch (error) {
            console.log(error);
        }
    }

    static async findById (pid) {
        try {
            return await Products.find({ _id: pid })
        } catch (error){
            console.log(error);
        }
    }

    static async findByRange ({high,low,cat}) {
        try {
            return await Products.find({
                price: {$gte:high ,$lte:low},
                category: cat
              }).sort({ price: 1 })
        } catch (error){
            console.log(error);
        }
    }

    static async modifyProduct ({id,mod}) {
        try {
            return await Products.updateOne({ _id:id}, { $set:mod})
        } catch (error){
            console.log(error);
        }
    }

    static async modifyProduct ({id,mod}) {
        try {
            return await Products.updateOne({ _id:id}, { $set:mod})
        } catch (error){
            console.log(error);
        }
    }

    static async pushReviews ({id,review}) {
        try {
            return await Products.updateOne(
                { _id:id },
                { $push: { review:review } }
              )
        } catch (error){
            console.log(error);
        }
    }

    static async deleteProduct (id) {
        try {
            return await Products.deleteOne({ _id:id })
        } catch (error){
            console.log(error);
        }
    }

}

module.exports = ProductService
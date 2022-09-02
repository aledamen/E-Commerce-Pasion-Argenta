const Orders = require('../models/Orders')

class OrderService {
    static async findAllOrders() {
        try {
            return await Orders.find().sort({ userId: 1 })
        } catch (error) {
            console.log(error)
        }
    }

    static async findById(id) {
        try {
            return await Orders.find({ _id: id })
        } catch (error) {
            console.log(error)
        }
    }

    static async findByUserId(id) {
        try {
            return await Orders.find({ userId: id })
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = OrderService

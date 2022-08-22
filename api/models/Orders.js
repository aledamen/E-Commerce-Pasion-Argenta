const mongoose = require('mongoose')

const OrdersSchema = new mongoose.Schema(
    {
        order: {
            type: Array,
            default: [],
        },
    },
    { timestamps: true }
)


module.exports = mongoose.model('orders', OrdersSchema)
const mongoose = require('mongoose')

const OrdersSchema = new mongoose.Schema(
    {
        userId: {
            type: String,
        },
        order: {
            type: Array,
            default: [],
        },
        total: {
            type: Number,
        },
    },
    { timestamps: true }
)

module.exports = mongoose.model('orders', OrdersSchema)

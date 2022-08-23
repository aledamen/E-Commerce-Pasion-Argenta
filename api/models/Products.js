const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const ProductsSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
        },
        description: {
            type: String,
            required: true,
        },
        img: {
            type: String,
            default: false,
        },
        price: {
            type: Number,
            required: true,
        },
        stock: {
            type: number,
            required: true,
            default:0,
        },
        category: {
            type: Array,
            default: [],
        },
        review: {
            type: Array,
            default: [],
        },
    },
    { timestamps: true }
)


module.exports = mongoose.model('product', ProductsSchema)
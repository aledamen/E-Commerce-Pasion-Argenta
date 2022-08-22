const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const CategorySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
        },
    },
    { timestamps: true }
)


module.exports = mongoose.model('category', CategorySchema)
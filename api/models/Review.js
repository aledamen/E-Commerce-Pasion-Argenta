const mongoose = require('mongoose')

const ReviewSchema = new mongoose.Schema(
    {
        review: {
            type: String,
        },
        userId: {
            type: String,
        },
        rating: {
            type: Decimal128,
        },
    },
    { timestamps: true }
)

module.exports = mongoose.model('review', ReviewSchema)

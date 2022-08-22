const mongoose = require('mongoose')

const AddressSchema = new mongoose.Schema(
    {
        street: {
            type: String,
        },
        number: {
            type: String,
        },
        city: {
            type: String,
        },
        province: {
            type: String,
        },
        zip: {
            type:String,
        },
        country: {
            type:String,
        }
    },
    { timestamps: true }
)


module.exports = mongoose.model('address', AddressSchema)
const mongoose = require('mongoose');

//  create customer schema
const customerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true

    },
    orders: [
        {
            orderId: {
                type: String,
                required: true
            },
            date: {
                type: Date,
                required: true
            },
            total: {
                type: Number,
                required: true
            },
            status: {
                type: String,
                required: true
            }
        }
    ],
    cart: [
        {
            productId: {
                type: String,
                required: true
            },
            quantity: {
                type: Number,
                required: true
            }
        }
    ]
});


// export customer model
module.exports = mongoose.model('Customer', customerSchema);


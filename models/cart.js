const monoose = require('mongoose');

// create cart schema
const cartSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    products: [
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

// export cart model
module.exports = mongoose.model('Cart', cartSchema);
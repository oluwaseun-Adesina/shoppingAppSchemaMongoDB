const mongoose = require('mongoose');

// create review schema
const reviewSchema = new mongoose.Schema({
    productId: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    comment: {
        type: String,
        required: true
    }
});

// export review model
module.exports = mongoose.model('Review', reviewSchema);
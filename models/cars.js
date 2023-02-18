const mongoose = require('mongoose');



//cars table schema
const Cars = mongoose.model('Cars', {
    number: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    make: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    }
});
module.exports = { Cars }
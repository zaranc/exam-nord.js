const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'categorySchema' },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'userSchema' }
});

module.exports = mongoose.model('Product', productSchema);

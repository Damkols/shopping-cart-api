const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const PostSchema = new Schema({
    "name": {
        type: String,
        required: true
    },
    "price": {
        type: Number,
        required: true
    },
    "stock_level": {
        type: Number,
        required: true
    },
    "category": {
        type: String,
        required: true
    },
    "date": {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Posts', PostSchema);
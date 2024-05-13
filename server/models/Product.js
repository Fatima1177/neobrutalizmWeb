const mongoose = require('mongoose');


const ProductSchema = mongoose.Schema({
    img: String,
    title: String,
    stockCount: Number,
    starPerFive: Number,
    hasDiscount: Boolean,
    beforePrice: Number,
    currentPrice: Number
})

module.exports = mongoose.model('Product', ProductSchema)
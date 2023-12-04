const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    discount_amount: Number,
    product_category: String,
    product_image: String,
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;

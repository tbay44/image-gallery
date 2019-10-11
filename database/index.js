const mongoose = require('mongoose');
const fs = require('fs');
const {Schema} = require('mongoose');
const products = require('./data.js');

const productSchema = new Schema({
  prime_pic: String,
  image1: String,
  image2: String,
});
const Product = mongoose.model('Product', productSchema);
mongoose.connect('mongodb://localhost:27017/tbay', {useNewUrlParser: true, useUnifiedTopology: true,});
const db = mongoose.connection;
// var products = JSON.parse(fs.readFileSync(__dirname + '/data.json', 'utf-8'));
Product.insertMany(products);

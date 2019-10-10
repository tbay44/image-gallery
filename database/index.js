const mongoose = require('mongoose');
const {Schema} = require('mongoose');
const {Model} = require('mongoose');

const productSchema = new Schema({
  image0: String,
  image1: String,
  image2: String,
});

const product = Model('Product', productSchema);

mongoose.connect('mongodb://localhost:27017/tbay');

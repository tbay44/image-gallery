const mongoose = require('mongoose');
const { Schema } = require('mongoose');


// Retain schema and model for queries to proper collection in db
const productSchema = new Schema({
  'id': Number,
  'prime_pic': String,
  'pic_1': String,
  'pic_2': String,
});
const Product = mongoose.model('Product', productSchema);
const connectionString = 'mongodb+srv://tbay:tbay@tbay-pdiop.gcp.mongodb.net/tbay?retryWrites=true&w=majority';
mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });

const getProductById = (id, callback) => {
  Product.find({ id }, (err, docs) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, docs);
    }
  });
};
module.exports = {
  getProductById,
};

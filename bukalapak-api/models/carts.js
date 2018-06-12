const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CartsSchema = new Schema({
  product_id: {
    type: ObjectId,
    required: true
  },
  qty: {
    type: Number,
    required: true,
    default: 1
  }
});

const Carts = mongoose.model('carts', CartsSchema);

module.exports = Carts;

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RatingSchema = new Schema({
  average_rate: {
    type: Number,
    default: 0
  },
  user_count: {
    type: Number,
    default: 0
  }
})

const DealInfoSchema = new Schema({
  original_price: Number
})

const ProductsSchema = new Schema({
  deal_info: {
    type: DealInfoSchema,
    default: []
  },
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  seller_name: {
    type: String,
    required: true
  },
  seller_avatar: {
    type: String,
    required: true
  },
  seller_level: {
    type: String,
    default: undefined
  },
  seller_delivery_time: {
    type: String,
    default: undefined
  },
  seller_positive_feedback: {
    type: Number,
    required: true
  },
  seller_positive_feedback: {
    type: Number,
    required: true
  },
  seller_term_condition: {
    type: String,
    default: undefined
  },
  city: {
    type: String,
    required: true
  },
  weight: {
    type: Number,
    required: true
  },
  images: [],
  desc: {
    type: String,
    required: true
  },
  condition: {
    type: String,
    default: "new"
  },
  stock: {
    type: Number,
    default: 1
  },
  rating: RatingSchema,
  interest_count: {
    type: Number,
    default: 0
  },
  view_count: {
    type: Number,
    default: 0
  }
});

const Products = mongoose.model('products', ProductsSchema);

module.exports = Products;

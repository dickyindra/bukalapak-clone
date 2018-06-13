const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Deal Info Schema
const DealInfoSchema = new Schema({
  _id: false,
  original_price: Number,
  discount_price: Number,
  discount_percentage: Number
})

// Rating Schema
const RatingSchema = new Schema({
  _id: false,
  average_rate: {
    type: Number,
    default: 0
  },
  user_count: {
    type: Number,
    default: 0
  }
})

// Main Schema (Products)
const ProductsSchema = new Schema({
  deal_info: {
    type: DealInfoSchema,
    default: []
  },
  price: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  category_id: {
    type: Number,
    required: true
  },
  category_structure: {
    type: Array,
    required: true
  },
  seller_username: {
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
  seller_avatar: {
    type: String,
    required: true
  },
  seller_level_badge_url: {
    type: String,
    default: true
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
  sold_count: {
    type: Number,
    default: 0
  },
  id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  province: {
    type: String,
    required: true
  },
  weight: {
    type: Number,
    required: true
  },
  images: {
    type: Array,
    required: true
  },
  small_images: {
    type: Array,
    required: true
  },
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

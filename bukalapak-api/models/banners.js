const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BannersSchema = new Schema({
  image: {
    type: String,
    required: true
  }
});

const Banners = mongoose.model('banners', BannersSchema);

module.exports = Banners;

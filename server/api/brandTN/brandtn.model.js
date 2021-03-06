'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var BrandTNSchema = new Schema({
  name: String,
  slug: String,
  info: String,
  parent: String,
  image: String,
  uid: String,
  brand: Number,
  category:Number,
  active: { type: Boolean, default: true },
  updated: {type: Date, default: Date.now}

});

module.exports = mongoose.model('BrandTN', BrandTNSchema);

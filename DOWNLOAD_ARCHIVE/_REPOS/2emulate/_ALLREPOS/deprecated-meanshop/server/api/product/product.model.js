'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ProductSchema = new Schema({
  title: { type: String, required: true, trim: true },
  price: { type: Number, required: true, min: 0 },
  stock: { type: Number, default: 1 },
  description: String,
  categories: [{ type: Schema.Types.ObjectId, ref: 'Catalog', index: true }]
}).index({
  'title': 'text',
  'description': 'text'
});

module.exports = mongoose.model('Product', ProductSchema);

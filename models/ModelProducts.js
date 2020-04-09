const mongoose = require('mongoose')

const ProductsSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true
  },
  images: [{type: String}],
  description: String,
  highlights:  [{type: String}],
  includes: [{type: String}],
  doesnotinclude:  [{type: String}],
  tags:[{type:String}],
  days:Number,
  nights: Number
})

const ModelProducts = mongoose.model('product', ProductsSchema)

module.exports = ModelProducts


const mongoose = require('mongoose')

const CategorySchema = mongoose.Schema({
  catname: [{
    type: String,
  }],
})

const ModelCategorys = mongoose.model('category', CategorySchema)

module.exports = ModelCategorys


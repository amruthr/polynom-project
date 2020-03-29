//carouselData.model.js
const mongoose = require('mongoose');

var CarouselSchema = new mongoose.Schema({
    
        src: {type: String, required:true},
        mobilesrc: {type: String, required:true},
        altText: {type: String, },
        caption: {type: String, required:true},
        title: {type: String },
        subtitle: {type: String},
        btn: {
          content: {type: String},
          link: {type: String}
    
        }
    }
);
const ModelCarousel = mongoose.model('carouselData', CarouselSchema)

module.exports = ModelCarousel;


//servicesData.model.js
const mongoose = require('mongoose');

var ServiceSchema = new mongoose.Schema({
    
        iconsrc: {type: String, required:true},
        bannersrc: [{type: String}],
        title: {type: String, required:true},
        body: {type: String, required:true},        
    }
);
const ModelServices = mongoose.model('servicesData', ServiceSchema)

module.exports = ModelServices;


const mongoose = require('mongoose');

const ImageSchema = new mongoose.Schema({ 

    imagePath : {
        type : String,
    },

    createdDate : {
        type : Date,
        default : Date.now
    }
});

module.exports = mongoose.model('ImageSchema', ImageSchema);
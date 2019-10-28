const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const YearSchema = new Schema({

    year: {
        type: String
    }


});

module.exports = mongoose.model('year', YearSchema);
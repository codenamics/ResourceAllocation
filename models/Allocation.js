const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const AllocationSchema = new Schema({
    name: {
        type: String,
        default: 'New'
    },
    jan: {
        type: String,
        default: 0
    },
    feb: {
        type: String,
        default: 0
    },
    mar: {
        type: String,
        default: 0
    },
    apr: {
        type: String,
        default: 0
    },
    may: {
        type: String,
        default: 0
    },
    jun: {
        type: String,
        default: 0
    },
    jul: {
        type: String,
        default: 0
    },
    aug: {
        type: String,
        default: 0
    },
    sep: {
        type: String,
        default: 0
    },
    nov: {
        type: String,
        default: 0
    },
    oct: {
        type: String,
        default: 0
    },
    dec: {
        type: String,
        default: 0
    },



})


const AllocationsSchema = new Schema({

    user: {

        type: mongoose.Schema.Types.ObjectId,
        refs: 'users'
    },
    year: {
        type: String,

    },
    allocations: [AllocationSchema],
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('allocation', AllocationsSchema);
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UserSchema = new Schema({

    name: {
        type: String,
        required: true,

    },
    password: {
        type: String,
        required: true
    },
    allocations: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'allocation'
    }],
    admin: {
        type: Boolean,
        default: false
    },
    date: {
        type: Date,
        default: Date.now
    },


});

module.exports = mongoose.model('users', UserSchema);
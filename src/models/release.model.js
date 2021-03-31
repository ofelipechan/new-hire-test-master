const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Release = new Schema({
    title: {
        type: String,
        required: true
    },
    'release-date': {
        type: String
    },
    'track-count': {
        type: Number,
        required: true
    },
    upc: {
        type: String,
        unique: true,
        index: {
            unique: true,
            dropDups: true
        },
        validate: (v) => typeof(v) === 'string' && v.length > 0
    },
    artists: {
        type: [String],
        required: true,
        validate: (v) => Array.isArray(v) && v.length > 0
    },
    label: {
        type: String,
        required: true
    },
    type: {
        type: String
    }
}, {
    versionKey: false
});


const model = mongoose.model('Release', Release);
model.createIndexes();
module.exports = model;
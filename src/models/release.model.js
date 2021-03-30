const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Release = new Schema({
    title: {
        type: String
    },
    'release-date': {
        type: String
    },
    'track-count': {
        type: Number
    },
    upc: {
        type: String
    },
    artists: [{
        type: String
    }],
    label: {
        type: String
    },
    type: {
        type: String
    }
});


const model = mongoose.model('Release', Release);

module.exports = model;
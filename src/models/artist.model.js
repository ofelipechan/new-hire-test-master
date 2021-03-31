const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Artist = new Schema({
    id: {
        type: String,
        index: {
            unique: true,
            dropDups: true
        }
    },
    name: {
        type: String
    },
    spotifyId: {
        type: String,
        unique: true,
    },
    genres: {
        type: [String],
        required: true,
        validate: v => Array.isArray(v) && v.length > 0
    }
}, {
    versionKey: false
});

const model = mongoose.model('Artist', Artist);
model.createIndexes();
module.exports = model;
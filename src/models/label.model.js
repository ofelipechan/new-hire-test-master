const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Label = new Schema({
    id: {
        type: String
    },
    name: {
        type: String
    },
    distributor: {
        type: String
    },
    region: {
        type: String
    }
}, {
    versionKey: false
});


const model = mongoose.model('Label', Label);

module.exports = model;
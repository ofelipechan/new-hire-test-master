const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Artist = new Schema({
    id: {
        type: String,
    },
    name: {
        type: String
    },
    spotifyId: {
        type: String
    },
    genres: [{
        type: String
    }]
}, {
    versionKey: false
});

// Artist.pre('save', (next) => {
//     console.log(next);
//     autoincremental(model, this, next);
// });


// async function autoincremental(model, data, next) {
//     const total = await model.find().sort({
//         id: -1
//     }).limit(1);
//     data.id = total.length === 0 ? 1 : (Number(total[0].id) + 1).toString();
//     next();
// };


const model = mongoose.model('Artist', Artist);
module.exports = model;
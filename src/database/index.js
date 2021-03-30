const mongoose = require('mongoose');
const connectionString = process.env.MONGO_CONNECTION || 'mongodb://localhost:27017/node-test-app';

async function connectDatabase(callback) {
    const options = {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
    };
    return callback(await mongoose.connect(connectionString, options));
}

async function disconnectDatabase() {
    await mongoose.disconnect();
    console.log('database disconnected');
}

module.exports = {
    connectDatabase,
    disconnectDatabase
};
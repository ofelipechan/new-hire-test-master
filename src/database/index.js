const mongoose = require('mongoose');
const connectionString = process.env.MONGO_CONNECTION || 'mongodb://localhost:27017/node-test-app';

async function connectDatabase(callback) {
    return callback(await mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true }));
}

async function disconnectDatabase() {
    await mongoose.disconnect();
    console.log('database disconnected');
}

module.exports = { connectDatabase, disconnectDatabase };
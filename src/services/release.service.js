const Release = require('../models/release.model');

class ReleaseService {
    async find() {
        try {
            const result = await Release.find().lean();
            return result;
        } catch (error) {
            throw error;
        }
    }

    async findOne(conditions) {
        try {
            const result = await Release.findOne(conditions);
            return result;
        } catch (error) {
            throw error;
        }
    }

    async create(release) {
        try {
            await Release.create(release);                
            return {
                message: 'Executed successfully',
            };
        } catch (error) {
            throw error.message || error;
        }
    }
}

module.exports = new ReleaseService();
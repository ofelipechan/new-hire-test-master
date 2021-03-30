const Release = require('../models/release.model');

class ReleaseService {
    async findAll() {
        try {
            const result = await Release.find().lean();
            return result;
        } catch (error) {
            console.error('An error occurred while trying to find all releases. ', error);
        }
    }

    async findOne(conditions) {
        try {
            const result = await Release.findOne(conditions);
            return result;
        } catch (error) {
            console.error('An error occurred while trying to find a release. ', error);
        }
    }

    async createOrUpdate(release) {
        try {
            const filters = { id: release.id, name: release.name };
            const options = { upsert: true, useFindAndModify: false, strict: false };
            await Release.updateOne(filters, release, options);                
            return {
                message: 'Executed successfully',
            };
        } catch (error) {
            throw this.errorHandler('An error occurred while trying to create a release.', error);
        }
    }

    errorHandler(message, error) {
        console.error(message);
        console.error(error);
        throw message;
    }
}

module.exports = new ReleaseService();
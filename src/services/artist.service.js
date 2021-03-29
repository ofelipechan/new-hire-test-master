const Artist = require('../models/artist');

class ArtistService {
    async findAll() {
        try {
            const result = await Artist.find().lean();
            return result;
        } catch (error) {
            console.error('An error occurred while trying to find all artists. ', error);
        }
    }

    async findOne(conditions) {
        try {
            const result = await Artist.findOne(conditions);
            return result;
        } catch (error) {
            console.error('An error occurred while trying to find all artists. ', error);
        }
    }

    async createOrUpdate(artist) {
        try {
            const filters = { id: artist.id, name: artist.name };
            const options = { upsert: true, useFindAndModify: false, strict: false };
            await Artist.updateOne(filters, artist, options);                
            return {
                message: 'Executed successfully',
            };
        } catch (error) {
            throw this.errorHandler('An error occurred while trying to create artists.', error);
        }
    }

    errorHandler(message, error) {
        console.error(message);
        console.error(error);
        throw message;
    }
}

module.exports = new ArtistService();
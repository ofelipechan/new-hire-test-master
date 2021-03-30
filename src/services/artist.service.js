const Artist = require('../models/artist.model');

class ArtistService {
    async find() {
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
            console.error('An error occurred while trying to find an artist. ', error);
        }
    }

    async create(artist) {
        try {
            await Artist.create(artist);                
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
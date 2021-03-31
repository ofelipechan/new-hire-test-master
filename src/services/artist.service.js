const Artist = require('../models/artist.model');
const ReleaseService = require('./release.service');

class ArtistService {
    async find(query) {
        try {
            this.buildQuery(query);
            const result = await Artist.find(query).lean();
            return result;
        } catch (error) {
            console.error('An error occurred while trying to find all artists. ', error);
        }
    }

    async findOne(conditions) {
        try {
            const artist = await Artist.findOne(conditions).lean();
            if (artist) {
                artist.releases = await ReleaseService.find({
                    artists: artist.id
                });
            }
            return artist;
        } catch (error) {
            throw error;
        }
    }

    async create(artist) {
        try {
            await Artist.create(artist);
            return {
                message: 'Executed successfully',
            };
        } catch (error) {
            throw error.message || error;
        }
    }

    buildQuery(query) {
        if (query.name) {
            query.name = {
                "$regex": query.name,
                "$options": "i"
            };
        }
        if (query.id) {
            query.id = {
                "$regex": query.id,
                "$options": "i"
            };
        }
        return query;
    }
}

module.exports = new ArtistService();
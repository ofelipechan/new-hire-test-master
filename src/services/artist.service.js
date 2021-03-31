const Artist = require('../models/artist.model');
const ReleaseService = require('./release.service');

class ArtistService {
    async find(query, filters) {
        try {
            this.buildQuery(query);
            clearEmptyFields(filters);
            let artists = await Artist.find(query).lean();
            for (const artist of artists) {
                const releaseFilters = {
                    artists: artist.id,
                    ...filters
                };
                artist.releases = await ReleaseService.find(releaseFilters);
            }
            artists = this.applyFilters(artists, filters);
            return artists;
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
                message: 'Created successfully',
            };
        } catch (error) {
            throw error.message || error;
        }
    }

    applyFilters(artists, filters) {
        if (isObjectEmpty(filters)) return artists;

        return artists.filter((artist) => artist.releases.length > 0);
    }

    buildQuery(query) {
        if (query.name) {
            query.name = {
                $regex: query.name,
                $options: 'i'
            };
        }
        if (query.id) {
            query.id = {
                $regex: query.id,
                $options: 'i'
            };
        }
        return query;
    }
}

module.exports = new ArtistService();

function isObjectEmpty(obj) {
    return obj && Object.keys(obj).length === 0 && obj.constructor === Object;
}

function clearEmptyFields(obj) {
    for (const propName in obj) {
        if (!obj[propName]) {
            delete obj[propName];
        }
    }
}
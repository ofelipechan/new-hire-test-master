const Release = require('../models/release.model');
const LabelService = require('./label.service');

class ReleaseService {
    async find(query) {
        try {
            this.buildQuery(query);
            const releases = await Release.find(query).lean();
            if (releases.length > 0) {
                for (const release of releases) {
                    release.label = await LabelService.findOne({
                        id: release.label
                    });
                }
            }
            return releases;
        } catch (error) {
            throw error;
        }
    }

    async findOne(conditions) {
        try {
            this.buildQuery(conditions);
            const release = await Release.findOne(conditions).lean();
            release.label = await LabelService.findOne({
                id: release.label
            });
            return release;
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

    buildQuery(query) {
        if (!query) return;
        if (query.type && query.type.toLowerCase() === "album") {
            query["track-count"] = {
                $gte: 1
            };
        }
        if (query.type && query.type.toLowerCase() === "single") {
            query["track-count"] = 1;
        }
        delete query.type;
    }
}

module.exports = new ReleaseService();
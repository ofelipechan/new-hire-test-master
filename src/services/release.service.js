const Release = require('../models/release.model');
const LabelService = require('./label.service');

class ReleaseService {
    async find(query) {
        try {
            let label;
            if (query && query.label) {
                label = query.label;
                delete query.label;
            }

            let releases = await Release.find(query).lean();
            if (releases.length > 0) {
                releases = this.applyFilters(releases, label);
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

    applyFilters(releases, label) {
        if (!label) return releases;

        return releases.filter((release) => release.label === label);
    }
}

module.exports = new ReleaseService();
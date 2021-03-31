const Label = require('../models/label.model');

class LabelService {
    async find() {
        try {
            const result = await Label.find().lean();
            return result;
        } catch (error) {
            console.error('An error occurred while trying to find all labels. ', error);
        }
    }

    async findOne(conditions) {
        try {
            const result = await Label.findOne(conditions).lean();
            return result;
        } catch (error) {
            console.error('An error occurred while trying to find an label. ', error);
        }
    }

    async create(label) {
        try {
            await Label.create(label);
            return {
                message: 'Executed successfully',
            };
        } catch (error) {
            throw error.message || error;
        }
    }
}

module.exports = new LabelService();
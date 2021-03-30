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
            const result = await Label.findOne(conditions);
            return result;
        } catch (error) {
            console.error('An error occurred while trying to find an label. ', error);
        }
    }

    async create(label) {
        try {
            const filters = { id: label.id, name: label.name };
            const options = { upsert: true, useFindAndModify: false, strict: false };
            await Label.updateOne(filters, label, options);                
            return {
                message: 'Executed successfully',
            };
        } catch (error) {
            throw this.errorHandler('An error occurred while trying to create labels.', error);
        }
    }

    errorHandler(message, error) {
        console.error(message);
        console.error(error);
        throw message;
    }
}

module.exports = new LabelService();
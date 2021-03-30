const fs = require('fs');
const {
    connectDatabase,
    disconnectDatabase
} = require('../src/database');

const seedsToInsert = []
const errors = [];
let totalLength = 0;
let done = 0;

connectDatabase(() => {
    console.log('database connected');
    try {
        console.log('importing seed files');
        requireFiles();
        console.log(`preparing to create ${totalLength} documents`)
        seedsToInsert.forEach((item) => {
            createDocuments(item);
        });
    } catch (error) {
        disconnectDatabase();
    }
});

function requireFiles() {
    const directory = `${__dirname}/data`;
    const mapFilesAndServices = (fileName) => {
        const fileRequired = require(`./data/${fileName}`);
        totalLength += fileRequired.data.length;
        const service = mapService(fileName);
        seedsToInsert.push({
            data: fileRequired.data,
            service,
            reference: fileName
        });
    };

    fs.readdirSync(directory)
        .filter((fileName) => fileName.endsWith('.json'))
        .map(mapFilesAndServices)
}

function mapService(fileName) {
    if (fileName.includes('artist')) {
        return require('../src/services/artist.service');
    }
    if (fileName.includes('label')) {
        return require('../src/services/label.service');
    }
    if (fileName.includes('release')) {
        return require('../src/services/release.service');
    }
}

async function createDocuments(list) {
    list.data.forEach(async (object) => {
        try {
            await list.service.create(object);            
        } catch (error) {
            errors.push({
                reference: list.reference,
                object,
                error
            });
        }
        afterSave();
    });
}

function afterSave() {
    done++;
    if (done === totalLength) {
        console.log('seed finished');
        disconnectDatabase();
        console.log('Errors: ' + JSON.stringify(errors));
    }
}








// const artist = new Artist({

// });
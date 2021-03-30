const fs = require('fs');
const {  connectDatabase, disconnectDatabase } = require('../src/database');

const seedsToInsert = []
let totalLength = 0;
let done = 0;

connectDatabase(() => {
    console.log('database connected');
    requireFiles();
    seedsToInsert.forEach((item) => {
        createDocuments(item.data, item.service);
    })
});

function requireFiles() {
    const directory = `${__dirname}/data`;
    fs.readdirSync(directory)
        .filter((fileName) => fileName.endsWith('.json'))
        .map((fileName) => {
            const fileRequired = require(`./data/${fileName}`);
            totalLength += fileRequired.data.length;
            const service = mapService(fileName);
            seedsToInsert.push({
                data: fileRequired.data,
                service
            });
        })
}

function mapService(fileName) {
    if(fileName.includes('artist')) {
        return require('../src/services/artist.service');
    }
    if(fileName.includes('label')) {
        return require('../src/services/label.service');
    }
    if(fileName.includes('release')) {
        return require('../src/services/release.service');
    }
}

async function createDocuments(list, service) {
    list.forEach(async (object) => {
        await service.createOrUpdate(object);
        afterSave();
    });
}

function afterSave() {
    done++;
    if (done === totalLength) {
        console.log('Seed finished');
        disconnectDatabase();
    }
}








// const artist = new Artist({

// });
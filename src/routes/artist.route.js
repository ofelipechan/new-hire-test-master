const express = require('express');
const ArtistService = require('../services/artist.service');

const router = express.Router();

function clearEmptyFields(obj) {
    for (const propName in obj) {
        if (!obj[propName]) {
            delete obj[propName];
        }
    }
}

function isObjectEmpty(obj) {
    clearEmptyFields(obj);
    if (obj && Object.keys(obj).length === 0 && obj.constructor === Object) {
        return true;
    }
    if (!obj.name && !obj.id) {
        return true;
    }
    return false;
}

router.get('/', async (req, res) => {
    try {
        if (isObjectEmpty(req.query)) {
            throw 'Please, provide param name or id';
        }
        res.json(await ArtistService.findOne(req.query));
    } catch (error) {
        res.status(400).json(error);
    }
});

router.get('/all', async (req, res) => {
    try {
        const {
            id,
            name,
            type,
            upc,
            label
        } = req.query;
        const query = {
            id,
            name
        };
        clearEmptyFields(query);
        res.json(await ArtistService.find(query, {
            type,
            upc,
            label
        }));
    } catch (error) {
        res.status(400).json(error.message);
    }
});

router.post('/', async (req, res) => {
    const {
        id,
        name,
        spotifyId,
        genres
    } = req.body;
    let response;
    try {
        response = await ArtistService.create({
            id,
            name,
            spotifyId,
            genres
        });
    } catch (error) {
        response = error;
    }
    res.json(response);
});

module.exports = router;

const express = require('express');
const router = express.Router();
const ArtistService = require('../services/artist.service');

router.get('/', async (req, res) => {
    try {
        if (isObjectEmpty(req.query)) {
            throw "Please, provide param name or id";
        }
        res.json(await ArtistService.findOne(req.query));
    } catch (error) {
        res.status(400).json(error);
    }
});

router.get('/all', async (req, res) => {
    try {
        let query = {};
        if (!isObjectEmpty(req.query)) {
            query = req.query;
        }
        res.json(await ArtistService.find(query));
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
})

module.exports = router;

function isObjectEmpty(obj) {
    return !obj.name && !obj.id;
}
const express = require('express');
const router = express.Router();
const ArtistService = require('../services/artist.service');

router.get('/', async (req, res) => res.json(await ArtistService.findAll()))
router.post('/', async (req, res) => {
    const { id, name, spotifyId, genres } = req.body;
    let response;
    try {
        response = await ArtistService.createOrUpdate({
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
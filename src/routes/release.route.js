const express = require('express');
const router = express.Router();
const ReleaseService = require('../services/release.service');

router.get('/all', async (req, res) => {
    try {
        const { type } = req.query;
        res.json(await ReleaseService.find({ type }));
    } catch (error) {
        res.status(400).json(error.message);
    }
});

router.get('/upc/:upc', async (req, res) => {
    try {
        const { upc } = req.params;
        res.json(await ReleaseService.findOne({ upc }));
    } catch (error) {
        res.status(400).json(error);
    }
});

module.exports = router;
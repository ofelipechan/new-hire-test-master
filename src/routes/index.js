const express = require('express');
const router = express.Router();
const ArtistRoutes = require('./artist.route');

router.use('/artist', ArtistRoutes);
router.get('/health', (req, res) => res.json({ message: 'API working' }));

module.exports = router;
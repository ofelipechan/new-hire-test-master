const express = require('express');
const router = express.Router();
const ArtistRoutes = require('./artist.route');
const ReleaseRoutes = require('./release.route');

router.use('/artist', ArtistRoutes);
router.use('/release', ReleaseRoutes);
router.get('/health', (req, res) => res.json({ message: 'API working' }));

module.exports = router;
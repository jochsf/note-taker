// require path and router
const path = require('path');
const router = require('express').Router();

// set up paths
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
})

// set up the path for notes.html
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/notes.html'));
})

module.exports = router;
let notes = require('../../db/db.json')
const router = require('express').Router();

const { validateNote, createNewNote, deleteNote } = require('../../lib/notes');

// get notes request from api
router.get('/notes', (req, res) => {
    res.json(notes)
})

// post notes request from api
router.post('/notes', (req, res) => {
    let note = req.body

    note.id = notes.length.toString();
    
    
    if (!validateNote(note)) {
        res.status(400).send('The note is not properly formatted.');
    } else {
        let note = req.body;
        const newNote = createNewNote(note, notes)
        res.json(notes);
    }
})

router.delete('/notes/:id', (req, res) => {
    let id = req.params.id;
    notes = deleteNote(id, notes);
    res.json(notes);

})

module.exports = router;
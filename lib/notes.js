const { json } = require('express');
const fs = require('fs');
const path = require('path');

// create functions

function validateNote(note) {
    if (!note.title || typeof note.title !== 'string') {
        return false;
    }
    if (!note.text || typeof note.text !== 'string') {
        return false;
    }
    return true;
}

function createNewNote(note, notesArray) {
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(notesArray, null, 2)
    )
    return note;
}

function deleteNote(noteID, notesArray) {
    for (var i = 0; i < notesArray.length; i++ ) {
        if (notesArray[i].id == noteID ) {
            notesArray.splice(i, 1)
        } 
    }

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify( notesArray , null, 2)
    )
    return notesArray;
}

module.exports = { validateNote, createNewNote, deleteNote }
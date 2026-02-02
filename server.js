const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Our "Database" of notes
let notes = [
    { id: "1", title: "First Note", content: "This is my very first note!" }
];

// Get all notes (for the sidebar)
app.get('/notes', (req, res) => {
    res.json(notes);
});

// Create a new empty note
app.post('/notes/new', (req, res) => {
    const newNote = {
        id: Date.now().toString(),
        title: "Untitled Note",
        content: ""
    };
    notes.unshift(newNote); // Put new notes at the top
    res.json(newNote);
});

// Update a specific note
app.put('/notes/:id', (req, res) => {
    const { id } = req.params;
    const { content } = req.body;
    const index = notes.findIndex(n => n.id === id);
    if (index !== -1) {
        notes[index].content = content;
        // Simple logic: first line of text becomes the title
        notes[index].title = content.split('\n')[0].substring(0, 20) || "Untitled Note";
        res.json({ status: "Saved" });
    }
});

app.listen(PORT, () => console.log(`🚀 Multi-Note Server at http://localhost:${PORT}`));
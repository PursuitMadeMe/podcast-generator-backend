// App.js : define the route handlers

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const multer = require('multer'); // Import multer

dotenv.config();

const app = express(); // Declare app before using it
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const upload = multer({ dest: 'uploads/' }); // Define upload here

app.use('/uploads', express.static('uploads'));

// Define our ROUTES : Health Check with GET / method = GET path = /
app.get('/', (request, response) => {
    response.status(200).json({ data: 'App is RUNNING' });
});

app.post('/api/generate-podcast', upload.single('audioFile'), (request, response) => {
    try {
        if (!request.file) {
            return response.status(400).json({ error: 'No audio file uploaded' });
        }

        const audioFilePath = request.file.path;

        const script = "This is a placeholder script generated from the audio.";

        response.json({
            success: true,
            scriptUrl: `/uploads/${request.file.filename}`,
            script,
            segments: [{ speaker: "Speaker 1", text: script }],
        });
    } catch (error) {
        console.error(error);
        response.status(500).json({ error: 'Internal Server Error' });
    }
});

app.post('/api/generate-from-transcript', (req, res) => {
    try {
        const { transcript } = req.body;
        if (!transcript) {
            return res.status(400).json({ error: 'Transcript is required' });
        }

        const script = "Generated podcast script based on the transcript.";

        res.json({
            success: true,
            script,
            segments: [{ speaker: "Speaker 1", text: script }],
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.use((request, response) => {
    response.status(404).json({ error: 'Not Found' });
});

module.exports = app;

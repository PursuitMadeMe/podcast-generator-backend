//Server.js : import the app, start up the SERVER and listen
require('dotenv').config()
const app = require ('./app');
const multer = require ('multer');

const upload = multer({ dest: 'uploads/' });

app.post('/api/generate-podcast', upload.single('audioFile'), (request, response) => {
    try{
        if(!request.file){
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
    }catch (error){
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



const geminiApiKey = process.env.GEMINI_API_KEY;

if (!geminiApiKey) {
    console.error('GEMINI_API_KEY not found!');
process.exit(1);
  } 


const PORT = process.env.PORT || 9000

app.listen(PORT ,() => {
    console.log(`Server running on PORT ${PORT}`)
});
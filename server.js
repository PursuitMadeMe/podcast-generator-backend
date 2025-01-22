//Server.js : import the app, start up the SERVER and listen

require('dotenv').config();

const geminiApiKey = process.env.GEMINI_API_KEY;

console.log(geminiApiKey)

if (geminiApiKey) {
  } else {
    console.error('GEMINI_API_KEY not found!');
  }

const app = require ('./app');

const PORT = process.env.PORT || 9000

app.listen(PORT ,() => {
    console.log(`Listening on PORT ${PORT}`)
});
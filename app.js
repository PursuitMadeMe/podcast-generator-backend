//App.js : define the route handlers

const express = require ('express');
const cors = require ('cors');
const dotenv = require ('dotenv');

dotenv.config();

const app = express();

app.use(cors());

app.use('/uploads', express.static('uploads'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Define our ROUTES : Health Check with GET / method = GET path = /
app.get('/', (request,response) => {
    response.status(200).json({ data: 'App is RUNNING'})
})

app.use((request, response) => {
    response.status(404).json({ error: 'Not Found' });
  });



module.exports = app;
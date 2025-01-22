//App.js : define the route handlers

const express = require ('express');

const cors = require ('cors');

const dotenv = require ('dotenv');

const app = express();

dotenv.config();

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

//Define our ROUTES : Health Check with GET / method = GET path = /
app.get('/', (request,response) => {
    response.status(200).json({ data: 'App is RUNNING'})
})

module.exports = app;
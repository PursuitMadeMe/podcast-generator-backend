//App.js : define the route handlers

const express = require ('express');

const app = express();

//Define our ROUTES : Health Check with GET / method = GET path = /
app.get('/', (request,response) => {
    response.status(200).json({ data: 'App is RUNNING'})
})

module.exports = app;
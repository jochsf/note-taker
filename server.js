// libraries
const fs = require('fs');
const path = require('path');
const express = require('express');

// import api and html
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const port = process.env.PORT || 3001;
const app = express();

// parse data 
app.use(express.urlencoded({ extended: true }));

// parse json data
app.use(express.json());

// create static resources
app.use(express.static('public'));

// set up routes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(port, () => {
    console.log(`API server now on port ${port}!`);
});
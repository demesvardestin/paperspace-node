const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');
const app = express();

require('./app/routes/app.routes.js')(app);
app.use(express.static(__dirname + '/dist'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

// listen for requests
app.listen(process.env.PORT || 8080, () => {
    console.log("Server is listening on port 8080");
})
const express = require('express');
const bodyParser = require('body-parser');
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

require('./app/routes/app.routes.js')(app);

app.set('views', './views');
app.set('view engine', 'pug');
app.get('/*', (req, res) => {
    res.redirect('/addresses');
});

// listen for requests
app.listen(process.env.PORT || 3000, () => {
    console.log("Server is listening on port 3000");
})
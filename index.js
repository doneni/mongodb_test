const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const port = 5000;

// Define Model
const Book = require('./Models/book');

const config = require('./config/key');

const router = require('./routes')(app, Book)

// run server
const server = app.listen(port, function() {
    console.log("Express server has started on port" + port)
});

const db = mongoose.connection;
db.on('error', console.error);
db.once('open', function() {
    //connected...
    console.log('Connected to mongo server');
});

mongoose.connect('mongodb+srv://doneni:dlehddusWkd@cluster0.cbv0qvh.mongodb.net/test');
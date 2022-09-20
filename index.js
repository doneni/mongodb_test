const express = require('express');
const app = express();
const port = 5000;

app.get('/', function(req,res) {
    res.send('Hello World!');
});

app.listen(port, () => console.log('${port} port'));

const mongoose = require('mongoose');
mongoose
.connect(
    'mongodb+srv://doneni:dlheddusWkd@cluster0.cbv0qvh.mongodb.net/test',
    {
        useNewUrlPaser: true,
        useUnifiedTofology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    }
)
.then(() => console.log('MongoDB connected'))
.catch((err) => {
    console.log(err);
});
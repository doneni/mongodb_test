const express = require('express');
const app = express();
const port = 5000;

const { User } = require('./Models/User'); //User.js(Schema) import

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.get('/', function(req,res) {
    res.send('Hello World! ^.^');
});

//resister api
app.post('/register', (req, res) => {
    const user = new User(req.body); //User 스카마에 req.body를 담아 user라는 인스턴스로 만듦.

    user.save((err, userInfo) => {
        if(err) return res.json({success: false, err}); //err일 때 return
        return res.status(200).json({
            //status가 20일 때 return
            success: true,
            userInfo,
        })
    })
});

app.listen(port, () => console.log('${port} port'));

const mongoose = require('mongoose');
mongoose
.connect(
    'mongodb+srv://doneni:dlehddusWkd@cluster0.cbv0qvh.mongodb.net/test',
    {
    }
)
.then(() => console.log('MongoDB connected'))
.catch((err) => {
    console.log(err);
});
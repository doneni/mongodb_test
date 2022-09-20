const mongoose = require('mongoose');

const userSchema = mongoose.Schema({ //Schema
    name: {
        type: String,
        maxLength: 50,
    },
    email: {
        type: String,
        maxLengh: 50,
        trim: true, // delete space
        unique: 1, // 같은 값은 하나만
    },
    role: {
        type: Number,
        default: 0,
    },
    token: {
        type: String,
    },
    tokenExp: {
        type: Number,
    },
});

const User = mongoose.model('User', userSchema); // Model

// Schema를 Model로 감쌈

module.exports = { User };
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const saltRounds = 10;

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

userSchema.pre('save', function(next) {
    const user = this; //this는 userSchemafmf 가리킴.

    if(user.isModified('password')) {
        bcrypt.genSalt(saltRounds, function(err, hash) {
            if(err) return next(err);

            bcrypt.hash(user.password, salt, function(err, hash) {
                if(err) return next(err);
                user.password = hash; //user.password 자리에 hash 할당
                next();
            });
        });
    }
    else {
        next();
    }
});

const User = mongoose.model('User', userSchema); // Model

// Schema를 Model로 감쌈

module.exports = { User };
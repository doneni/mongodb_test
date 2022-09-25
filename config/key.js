// 환경에 따라 분기를 나눠주는 코드

if(process.env.NODE_ENV === 'production') {
    module.exports = require('./production');
} else {
    module.exports = require('./development');
}
var config = require('./config'),
    mongoose = require('mongoose');

module.exports = function(){
    mongoose.set('debug', config.debug);
    var db = mongoose.connect(config.mongoUri),
        User = require('../app/models/user.model');

    return db;
}
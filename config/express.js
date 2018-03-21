var express = require('express'),
    body_parser = require('body-parser'),
    compression = require('compression'),
    morgan = require('morgan'),
    validator = require('express-validator'),
    session = require('express-session'),
    config = require('./config');

module.exports = function () {
    var app = express(),
        home_route = require('../app/routes/home.routes'),
        user_route = require('../app/routes/user.routes');

    // set NODE_ENV = development
    // set NODE_ENV = production
    if(process.env.NODE_ENV === 'development'){
        app.use(morgan('dev'));
    }
    else{
        app.use(compression);
    }

    app.use(session({
        secret: config.sessionSecret,
        resave: false,
        saveUninitialized: true
    }));
    app.use(body_parser.urlencoded({extended:true})); // encode URL
    app.use(body_parser.json()); // encode JSON
    app.use(validator());

    app.set('views', './app/views');
    app.set('view engine', 'jade');

    home_route(app);
    user_route(app);

    app.use(express.static('./public'));

    return app;
};
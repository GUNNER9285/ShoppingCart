var express = require('express'),
    body_parser = require('body-parser'),
    compression = require('compression'),
    morgan = require('morgan');
module.exports = function () {
    var app = express(),
        route = require('../app/routes/home.routes');

    // set NODE_ENV = development
    // set NODE_ENV = production
    if(process.env.NODE_ENV === 'development'){
        app.use(morgan('dev'));
    }
    else{
        app.use(compression);
    }

    app.use(body_parser.urlencoded({extended:true})); // encode URL
    app.use(body_parser.json()); // encode JSON

    route(app);
    return app;
};
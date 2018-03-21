process.env.NODE_ENV = process.env.NODE_ENV||'development';
var mongoose = require('./config/mongoose'),
    express = require('./config/express'),
    db = mongoose(),
    app = express(),
    port = process.env.PORT||3000;

mongoose.Promise = global.Promise;

app.listen(port);
module.exports = app;
console.log('Server running ...');
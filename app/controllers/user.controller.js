var User = require('mongoose').model('User');

exports.register = function (req, res, next) {
    res.render('register');
};
exports.create = function (req, res, next) {
    var user = new User(req.body);
    user.save(function (err) {
        if (err){
            //return next(err);
            res.send(err);
        }
        else{
            res.json(user);
        }
    });
};

exports.readall = function (req, res, next) {
    User.find({}, function (err, users) {
        if (err){
            res.send(err);
        }
        else{
            //res.json(users);
            res.render('readall', {
               users: users
            });
        }
    });
};

exports.readone = function (req, res, next) {
    res.render('readall', {
        users: req.user
    });
};
exports.userByUsername = function (req, res, next, username) {
    User.findOne({
        username: username
    }, function (err, user) {
        if (err){
            res.send(err);
        }
        else{
            req.user = user;
            next();
        }
    });
};

exports.edit = function (req, res, next) {
    res.render('edit', {
        user: req.user
    });
};
exports.update = function (req, res, next) {
    User.findOneAndUpdate({
        username: req.user.username
    }, req.body, function (err, user) {
        if (err){
            res.send(err);
        }
        else{
            res.redirect('/readall');
        }
    });
};
exports.delete = function (req, res, next) {
    req.user.remove(function(err) {
        if (err){
            res.send(err);
        }
        else{
            res.redirect('/readall');
        }
    });
};
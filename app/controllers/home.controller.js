exports.show_homepage = function (req, res) {
    res.send('Hello World');
};

exports.demoJade = function (req, res) {
    res.render('demoJade',{
        'title': 'demoJade',
        'message': 'Jade Template'
    });
};

exports.form = function (req, res) {
    isLoggedIn = false

    if(typeof req.session.remember != 'undifined'){
        isLoggedIn = req.session.remember;
    }
    res.render('login',{
        title: 'Hello',
        isLoggedIn: isLoggedIn
    });
};
exports.login = function (req, res) {
    // console.log(req.body);
    // { email: 'fgdg@gm', pwd: '1234' }

    req.checkBody('email', 'Invalid email').notEmpty().isEmail();
    req.sanitizeBody('email').normalizeEmail();
    var error = req.validationErrors();
    if(error){
        res.render('login', {
            title: 'Error '+JSON.stringify(error),
            isLoggedIn: true
        });
        return;
    }

    if(req.body.remember === 'remember'){
        req.session.remember = true;
        req.session.email = req.body.email;
        req.session.maxAge = 60000;
    }

    res.render('login', {
        title: 'Logged in as '+req.body.email,
        isLoggedIn: true
    });


};
exports.logout = function (req, res) {
    req.session = null;

    res.render('login', {
        title: 'See ya',
        isLoggedIn: false
    });
};
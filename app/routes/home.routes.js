module.exports = function (app) {
    var controller = require('../controllers/home.controller');
    app.route('/')
        .get(controller.show_homepage);
    app.route('/demoJade')
        .get(controller.demoJade);
    app.route('/demform')
        .get(controller.form);
    app.route('/login')
        .post(controller.login);
    app.route('/logout')
        .post(controller.logout);
};
module.exports = function (app) {
    var controller = require('../controllers/user.controller');
    app.route('/register')
        .get(controller.register);
    app.route('/create')
        .post(controller.create);
    app.route('/readall')
        .get(controller.readall);
    app.route('/readone/:username')
        .get(controller.readone);
    app.route('/edit/:username')
        .get(controller.edit)
        .post(controller.update);
    app.route('/delete/:username')
        .get(controller.delete);
    app.param('username', controller.userByUsername);
};
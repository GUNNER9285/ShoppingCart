module.exports = function (app) {
    var controller = require('../controllers/home.controller');
    app.route('/')
        .get(controller.show_homepage);
};
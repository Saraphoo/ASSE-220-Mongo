const userController = require('./controllers/UserController');
exports.routes = function(app) {
    app.post('/api/signin', userController.signin);
}
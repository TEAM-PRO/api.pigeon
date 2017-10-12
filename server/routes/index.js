const {
    profileController,
    userController
} = require('../controllers');

module.exports = app => {
    app.get('/api/profile/:id', profileController.retrieve);
    app.put('/api/profile/:id', profileController.update);

    app.post('/api/users', userController.create);
    app.post('/api/user/changepassword', userController.update);
    app.get('/api/user/:user_id', userController.retrieve);
    app.delete('/api/user/:user_id', userController.destroy);
};
const {
    profileController,
    userController,
    pigeonController
} = require('../controllers');

module.exports = app => {
  app.post('/api/pigeon', pigeonController.create);
  app.post('/api/pigeon/:pigeon_id', pigeonController.update);
  app.get('/api/pigeon/:pigeon_id', pigeonController.retrieve);
  app.delete('/api/pigeon/:pigeon_id', pigeonController.destroy);
};

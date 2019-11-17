var express = require('express');
var router = express.Router();

const attach = (app, controllersFactory) => {
  const dummyController = controllersFactory.getDummyController();

  router.route('/dummy/:kur', ).get(dummyController.dummy)

  app.use('/', router);
}

module.exports = attach;

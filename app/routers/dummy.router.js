var express = require('express');
var router = express.Router();

const attach = (app, controllersFactory) => {
  const dummyController = controllersFactory.getDummyController();

  router.route('/dummy/', ).get((req, res) => dummyController.dummy(req, res))

  app.use('/', router);
}

module.exports = attach;

var express = require('express');
var router = express.Router();

const attach = (app, controllersFactory) => {
  const cardsController = controllersFactory.getCardsController();

  router.route('/card-check', ).get(cardsController.cardCheck);

  app.use('/', router);
}

module.exports = attach;

const init = async (data, controllerFactory) => {
  const express = require('express');
  const app = express();
  const server = require('http').Server(app);

  require('./app.config').baseConfig(app);
  //require('./app.config').authConfig();

  require('./routers').attachTo(app, controllerFactory);

  require('./app.config').errorConfig(app, controllerFactory);

  return server;
};

module.exports = { init };

const start = async () => {
    const config = require('./config');
    const controllers = require('./app/controllers');
    const { ControllerFactory } = require('./utils/factories');
    controllerFactory = new ControllerFactory(controllers, null);
    const app = await require('./app').init(null, controllerFactory);
    return app.listen(
        config.port,
        () => console.log(`Server started and `
            + `listending on port ${config.port}`)
    );
}

module.exports = { start };

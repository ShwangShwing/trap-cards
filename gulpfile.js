const start = async () => {
    const config = require('./config');
    const controllers = require('./app/controllers');
    const { CardNumbers, StampCodes } = require('./utils/number_tools');
    const { ControllerFactory } = require('./utils/factories');
    const MysqlDatabase = require('./utils/database/mysql.database');
    cardNumbers = new CardNumbers();
    stampCodes = new StampCodes();
    database = new MysqlDatabase(config.mysqlConfig);
    const data = await require('./app/data').init(database);
    controllerFactory = new ControllerFactory(controllers, data, config.trustedAdminIps, cardNumbers, stampCodes);
    const app = require('./app').init(config, data, controllerFactory);
    return (await app).listen(
        config.port,
        () => console.log(`Server started and `
            + `listending on port ${config.port}`)
    );
}

module.exports = { start };

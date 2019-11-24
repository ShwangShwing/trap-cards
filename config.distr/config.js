const config = {
    port: process.env.PORT || 3000,
    cookie: {
        secret: process.env.COOKIE_SECRET || 'There is no knowledge that is not power!',
        expirationTime: new Date(Date.now() + 24 * 60 * 60 * 1000),
    },
    mysqlConfig: {
        host: 'localhost',
        user: 'trapcards',
        password: 'trap-cards',
        database: 'trapcards'
    }
};

module.exports = config;

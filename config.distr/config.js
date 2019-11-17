const config = {
    port: process.env.PORT || 3000,
    connectionString: process.env.DATABASE,
    cookie: {
        secret: process.env.COOKIE_SECRET || 'There is no knowledge that is not power!',
        expirationTime: new Date(Date.now() + 24 * 60 * 60 * 1000),
    },
};

module.exports = config;

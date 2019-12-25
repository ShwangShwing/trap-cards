/* globals __dirname */

const path = require('path');
const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);
const { flash } = require('express-flash-message');
const bodyParser = require('body-parser');
var exphbs  = require('express-handlebars');

const configApp = (app, config) => {
    app.use(morgan('dev'));
    app.use(cookieParser());
    app.use(session({
        secret: config.cookie.secret,
        maxAge: config.cookie.expirationTime,
        store: new MySQLStore(config.mysqlConfig),
        resave: false,
        saveUninitialized: true
    }));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use('/libs', express.static(path
        .join(__dirname, '../../node_modules')));
    app.use('/public', express.static(path
        .join(__dirname, '../../public')));
    app.use(flash());
    app.set('views', path.join(__dirname, '../views'));
    app.locals.isTest = config.isTest;
    var hbs = exphbs.create({
        extname: '.hbs',
        defaultLayout: 'layout',
        layoutsDir: 'app/views',
        helpers: {
            ifEq: function(a, b, opts) {
                if (a == b) {
                    return opts.fn(this);
                } else {
                    return opts.inverse(this);
                }
            },
            ifNotEq: function(a, b, opts) {
                if (a != b) {
                    return opts.fn(this);
                } else {
                    return opts.inverse(this);
                }
            }
        }
    });
    app.engine('hbs', hbs.engine);
    app.set('view engine', 'hbs');
};

module.exports = configApp;

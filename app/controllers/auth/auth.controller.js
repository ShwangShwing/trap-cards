class AuthController {
    constructor(data, trustedAdminIps) {
        this._data = data;
        this._trustedAdminIps = trustedAdminIps;
    }

    async login(req, res) {
        const templateValues = {
            title: 'Вход за администратори',
            messages: await req.consumeFlash('info'),
            errors: await req.consumeFlash('error')
        }

        res.render('admin/login', templateValues);
    }

    async verifyLoggedAdmin(req, res, next) {
        if (req.user) {
            return next();
        } else {
            req.flash('error', 'Няма логнат администратор.');
            return res.redirect(303, '/admin/login');
        }
    }

    async verifyTrustedIp(req, res, next) {
        const requestIP = req.connection.remoteAddress;
        const isIpTrusted = this._trustedAdminIps.indexOf(requestIP) >= 0;
        if (isIpTrusted) {
            return next();
        } else {
            req.flash('error', 'Тази странца е само за администратори.');

            return res.redirect(303, '/home');
        }
    }
}

module.exports = AuthController;

class ControllerFactory {
    constructor(controllers, data, trustedAdminIps, cardNumbers, stampCodes) {
        this._controllers = controllers;
        this._trustedAdminIps = trustedAdminIps;
        this._data = data;
        this._cardNumbers = cardNumbers;
        this._stampCodes = stampCodes
    }

    getErrorController() {
        return new this._controllers.ErrorController(this.logger);
    }

    getDummyController() {
        return new this._controllers.DummyController(this._stampCodes);
    }

    getCardsController() {
        return new this._controllers.CardsController(this._data, this._cardNumbers);
    }

    getAuthController() {
        return new this._controllers.AuthController(this._data, this._trustedAdminIps);
    }

    getAdminController() {
        return new this._controllers.AdminController(this._data);
    }

}

module.exports = ControllerFactory;

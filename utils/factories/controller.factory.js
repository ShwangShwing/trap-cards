class ControllerFactory {
    constructor(controllers, data) {
        this.controllers = controllers;
        this.data = data;
    }

    getErrorController() {
        return new this.controllers.ErrorController(this.logger);
    }

    getDummyController() {
        return new this.controllers.DummyController();
    }

    getCardsController() {
        return new this.controllers.CardsController();
    }

}

module.exports = ControllerFactory;

class ControllerFactory {
    constructor(controllers, data, cardNumbers, stampCodes) {
        this.controllers = controllers;
        this.data = data;
        this.cardNumbers = cardNumbers;
        this.stampCodes = stampCodes
    }

    getErrorController() {
        return new this.controllers.ErrorController(this.logger);
    }

    getDummyController() {
        return new this.controllers.DummyController(this.stampCodes);
    }

    getCardsController() {
        return new this.controllers.CardsController(this.data, this.cardNumbers);
    }

}

module.exports = ControllerFactory;

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

}

module.exports = ControllerFactory;

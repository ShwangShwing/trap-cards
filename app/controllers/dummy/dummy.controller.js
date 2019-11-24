class DummyController {
    constructor(stampCodes) {
        this.stampCodes = stampCodes;
    }

    dummy(req, res) {
        const stampCode = this.stampCodes.getStampCode();
        res.render('index', { title: 'Dummy page', stampCode: stampCode });
    }
}

module.exports = DummyController;

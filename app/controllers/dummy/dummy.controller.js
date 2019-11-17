class DummyController {
    constructor(data) {
        this.data = data;
    }

    dummy(req, res) {
        res.render('index', { title: 'Dummy page', kur: req.params.kur });
    }
}

module.exports = DummyController;

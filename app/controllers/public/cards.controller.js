class CardsController {
    constructor(data) {
        this.data = data;
    }

    cardCheck(req, res) {
        res.render('index', { title: 'Dummy page', kur: 'card check' });
    }

    redeemStampPage(req, res) {
        res.render('index', { title: 'Dummy page', kur: 'redeem stamp page' });    
    }

    redeemStamp(req, res) {
        res.render('index', { title: 'Dummy page', kur: 'redeem stamp' });    
    }

    registerPage(req, res) {
        res.render('index', { title: 'Dummy page', kur: 'register page' });    
    }

    register(req, res) {
        res.render('index', { title: 'Dummy page', kur: 'register' });    
    }
}

module.exports = CardsController;

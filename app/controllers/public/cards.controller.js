class CardsController {
    constructor(data, cardNumbers) {
        this.data = data;
        this.cardNumbers = cardNumbers;
    }

    async cardCheck(req, res) {
        let card = undefined;
        if (req.query.cardnumber) {
            card = await this.data.cards.getByNumber(req.query.cardnumber);
            if (!card) {
                req.flash('error', `Карта с номер ${req.query.cardnumber} не съществува.`);
            }
        }
        res.render('card-check', { title: 'Проверка на карта', searchedCardNumber: req.query.cardnumber, card: card, errors:  await req.consumeFlash('error') });
    }

    async redeemStamp(req, res) {
        res.render('redeem-stamp', { 
            title: 'Въвеждане на талон', 
            cardNumber: req.query.cardnumber, 
            messages: await req.consumeFlash('info'), 
            errors: await req.consumeFlash('error') 
        });    
    }

    async register(req, res) {
        if (req.method == 'POST') {
            let hasErrors = false;

            if (!req.body.email) {
                hasErrors = true;
                req.flash('error', 'Не е въведен e-mail!');
            }

            if (req.body.email != req.body.emailconfirm) {
                hasErrors = true;
                req.flash('error', 'Въведеният e-mail не съвада с потвърдения e-mail!');
            }

            if (!req.body.firstname) {
                hasErrors = true;
                req.flash('error', 'Не е въведено собствено име!');
            }

            if (!req.body.lastname) {
                hasErrors = true;
                req.flash('error', 'Не е въведено фамилно име!');
            }

            if (!hasErrors) {
                const cardFields = {
                    email: req.body.email,
                    nick: req.body.firstname,
                    firstName: req.body.lastname,
                    lastName: req.body.lastname,
                    picUrl: '',
                }
                try {
                    const newCard = await this.data.cards.addCard(cardFields, (cn) => this.cardNumbers.putChecksum(cn));
                    req.flash('info', `Успешна регистрация. Номерът на регистрираната карта е ${newCard.number}.`);
                    res.redirect(303, `/redeem-stamp?cardnumber=${newCard.number}`);
                    // send mail here
                    return;
                } catch (err) {
                    req.flash('error', 'Възникна грешка при регистрацията!');
                    console.log(err);
                }
            }
        }
        
        const templateValues = {
            title: 'Регистрация',
            email: req.body.email,
            nick: req.body.nick,
            firstName: req.body.firstname,
            lastName: req.body.lastname,
            messages: await req.consumeFlash('info'), 
            errors: await req.consumeFlash('error') 
        }
        res.render('register', templateValues);    
    }
}

module.exports = CardsController;

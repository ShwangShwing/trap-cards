class Card {
    constructor(card) {
        this._number = 0 | card.number;
        this._email = '' + card.email;
        this._nick = '' + card.nick;
        this._firstName = '' + card.firstName;
        this._lastName = '' + card.lastName;
        this._picUrl = '' + card.picUrl;
        this._issueDate = new Date(card.issueDate);
        this._balance = 0 | card.balance;
        this._isActive = !! card.isActive;
        this._pendingDeactivationDate = new Date(card.pendingDeactivationDate);
    }

    get number() {
        return this._number;
    }

    get email() {
        return this._email;
    }

    get nick() {
        return this._nick;
    }

    get firstName() {
        return this._firstName;
    }

    get lastName() {
        return this._lastName;
    }

    get picUrl() {
        return this._picUrl;
    }

    get issueDate() {
        return this._issueDate;
    }

    get balance() {
        return this._balance;
    }

    get isActive() {
        return this._isActive;
    }

    get pendingDeactivationDate() {
        return this.pendingDeactivationDate;
    }
}

module.exports = Card;

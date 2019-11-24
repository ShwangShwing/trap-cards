const CardsData = require('./cards.data');

const init = async (database) => {
    return {
        cards: new CardsData(database)
    };
};

module.exports = { init };
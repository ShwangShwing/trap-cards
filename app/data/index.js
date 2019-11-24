const CardsData = require('./cards.data');
const StampsData = require('./stamps.data');

const init = async (database) => {
    return {
        cards: new CardsData(database),
        stamps: new StampsData(database)
    };
};

module.exports = { init };
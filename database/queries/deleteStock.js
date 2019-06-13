const Stock = require('../models/stock');

/**
 * Deletes a single stock in the Stocks collection.
 * @param {String} ticker - The ticker of the stock to be deleted
 * @return {promise} A promise that resolves with the Stock is deleted
 */
module.exports = {
    delete(req, res ,next) {
        const ticker = req.params.ticker;

        Stock.findOneAndDelete({ ticker: ticker })
            .then(stock => res.status(204).send(stock))
            .catch(next);
    }

};
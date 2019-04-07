
module.exports = (app) => {
    let quoteController = require('./controllers/quote.controller');
    app.route('/api/quote')
        .get(quoteController.get)
        .post(quoteController.post);
}

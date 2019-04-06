
module.exports = (app) => {
    let quoteController = require('./controllers/quote.controller');
    app.route('/api/quotes')
        .get(quoteController.get)
        .post(quoteController.post);
}

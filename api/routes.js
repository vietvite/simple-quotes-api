
module.exports = (app) => {
    let quoteController = require('./controllers/quote.controller');
    app.route('/').get((req, res) => res.send(`<h1>Quote API</h1>`));
    app.route('/api/quote')
        .get(quoteController.get)
        // .post(quoteController.post);
}

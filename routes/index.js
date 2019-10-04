const router = require('express').Router();
const quoteModel = require('../models/quote.model');
const { randomOne } = require('../common/crud');

/* GET home page. */
router.get('/', (req, res) => {
  res.send(`
    <h1>Quote API</h1>
    <p>Trích hay tiếng Việt</p>
  `);
});

// GET quote
router.get('/quote', randomOne(quoteModel));

module.exports = router;

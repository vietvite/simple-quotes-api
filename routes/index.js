var express = require('express');
var router = express.Router();
let Quote = require('../models/quote.model');

/* GET home page. */
router.get('/', function(req, res) {
  res.send(`
    <h1>Quote API</h1>
    <p>Trích hay tiếng Việt</p>
  `);
});

// GET quote
router.get('/quote', (req, res) => {
  let quote = new Quote().getQuote();
  quote.then( rs => res.status(200).json(rs) )
    .catch( err => res.status(500).json({"err": err}) )
});

module.exports = router;




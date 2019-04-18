var express = require('express');
var router = express.Router();
let Quote = require('../models/quote.model');

/* GET home page. */
router.get('/', function(req, res) {
  res.send(`<h1>Quote API</h1>`);
});

// GET quote
router.get('/quote', (req, res) => {
  let result = Quote.getQuote();
  console.log("Result la: "+result);
  result.then(quote => {
    res.json(result.quote);
  }).catch(err => {
    res.send({"Err": err})
  })
});
module.exports = router;

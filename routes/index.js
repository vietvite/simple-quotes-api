var express = require('express');
var router = express.Router();
let Quote = require('../models/quote.model');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send(`<h1>Quote API</h1>`);
});

router.get('/api/quote', (req, res) => {
    Quote.findOneRandom((err, quote) => {
        if(!err)
            res.status(200).json(quote);
        else
            res.status(500).json({err: err});
    })
})
module.exports = router;

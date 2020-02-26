var express = require('express');
var router = express.Router();
let Quote = require('../models/quote.model');

// GET quote
router.get('/quote', (req, res) => {
  Quote.getQuote().then(rs => {
    res.status(200).json(rs)
  }).catch(err => {
    res.status(500).json({ err: err })
  })
});

router.post('/quote', (req, res) => {
  Quote.addManyQuotes(req.body).then(quotes => {
    res.status(200).json({
      success: true,
      quotes: quotes
    })
  }).catch(err => {
    res.status(500).json({
      success: false,
      err: err
    })
  })
})

module.exports = router;




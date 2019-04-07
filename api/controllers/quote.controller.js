let Quote = require('../../models/quote.model.js');
module.exports = {
    get: (req,res) => {
        Quote.findOneRandom((err, quotes) => {
            if(!err)
                res.status(200).json(quotes);
            else
                res.status(500).json(err);
        })
    }
  //   ,post: (req, res) => {
  //       let quote = {
  //           quote: req.body.quote,
  //           author: req.body.author
  //       };

  //       let quote = new Quote (quote);
  //       quote.save()
  //           .then(result => res.status(200).json({msg: 'Success'}))
  //           .catch(err => res.status(500).json({msg: 'Error:' + err}));
  //   }
}

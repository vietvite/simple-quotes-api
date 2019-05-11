let mongoose = require('mongoose');
let random = require('mongoose-simple-random');

let quoteSchema = new mongoose.Schema({
    quote: String,
    author: String
});
quoteSchema.plugin(random);

class quoteClass {
  getQuote() {
    return new Promise((resolve, reject) => {
      quoteModel.findOneRandom((err, quote) => {
        !err ? resolve(quote) : reject(err);
      })
    });
  };
}

let modelName = 'Quote';
let quoteModel = mongoose.model(modelName, quoteSchema);

module.exports = quoteClass;
module.exports.QuoteModel = quoteModel;
let mongoose = require('mongoose');
let random = require('mongoose-simple-random');

let quoteSchema = new mongoose.Schema({
    quote: String,
    author: String
});
quoteSchema.plugin(random);

class quoteClass {
  static getQuote() {
    return new Promise((resolve, reject) => {
      quoteModel.findOneRandom((err, quote) => {
        if(!err) {
          resolve(quote);
        } else {
          reject('Cannot get quote. Seem like something get wrong');
        }
      })
    });
  };

  static async addManyQuotes(quotes) {
    if(quotes && quotes.length > 0) {
      return await quoteModel.insertMany(quotes);
    } else{
      throw 'Input must be an array and have at least one object'
    }
  }
}

let modelName = 'Quote';
let quoteModel = mongoose.model(modelName, quoteSchema);

module.exports = quoteClass;
module.exports.QuoteModel = quoteModel;
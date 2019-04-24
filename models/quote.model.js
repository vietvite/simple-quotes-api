let mongoose = require('mongoose');
let random = require('mongoose-simple-random');

let quoteSchema = new mongoose.Schema({
    quote: String,
    author: String
});
quoteSchema.plugin(random);

class quoteClass {
  constructor(quote) {
    this.quote = quote;
  }
  getQuote() {
    return new Promise((resolve, reject) => {
      quoteModel.findOneRandom((err, quote) => {
        if(!err){
          resolve(quote);
        } else {
          reject(err);
        }
      })
    });
  };
  async addQuote() {
    let newQuote = new quoteModel(this.quote);
    return await newQuote.save();
  }
}

let modelName = 'Quote';
let quoteModel = mongoose.model(modelName, quoteSchema);

module.exports = quoteClass;
module.exports.QuoteModel = quoteModel;
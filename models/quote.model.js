let mongoose = require('mongoose');
let random = require('mongoose-simple-random');

let quoteSchema = new mongoose.Schema({
    quote: String,
    author: String
});

class quoteClass {
  
  static async getQuote(){
    let rs = await quoteModel.findOneRandom();
  }
}

quoteSchema.loadClass(quoteClass);
quoteSchema.plugin(random);
let modelName = 'Quote';
let quoteModel = mongoose.model(modelName, quoteSchema);
module.exports = quoteModel;

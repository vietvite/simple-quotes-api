let mongoose = require('mongoose');
let random = require('mongoose-simple-random');

let quoteSchema = new mongoose.Schema({
    quote: String,
    author: String
});

quoteSchema.plugin(random);

module.exports = mongoose.model('Quote', quoteSchema);

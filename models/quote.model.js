let mongoose = require('mongoose');

let quoteSchema = new mongoose.Schema({
    quote: String,
    author: String
});

module.exports = mongoose.model('Quote', quoteSchema);

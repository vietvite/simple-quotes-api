const mongoose = require('mongoose');
const random = require('mongoose-simple-random');

const quoteSchema = new mongoose.Schema({
  quote: {
    type: String,
    required: true,
  },
  author: String,
});
quoteSchema.plugin(random);

const modelName = 'Quote';
module.exports = mongoose.model(modelName, quoteSchema);
module.exports.ModelName = modelName;

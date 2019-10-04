const mongoose = require('mongoose');
const validator = require('validator');

const { ObjectId } = mongoose.Schema.Types;

const userSchema = mongoose.Schema({
  _id: ObjectId,
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: [validator.isEmail, 'invalid email'],
  },
  role: {
    type: String,
    enum: ['admin', 'member'],
    required: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  updateAt: Date,
});

const modelName = 'User';
module.exports = mongoose.model(modelName, userSchema);
module.exports.ModelName = modelName;

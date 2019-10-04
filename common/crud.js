/* eslint-disable no-underscore-dangle */
const mongoose = require('mongoose');
const { callbackRes, errorRes } = require('./response');

function create(model, populate = []) {
  return (req, res) => {
    const newData = new model({
      _id: new mongoose.Types.ObjectId(),
      ...req.body,
    });
    newData.save()
      .then((rs) => rs.populate(...populate, callbackRes(res)))
      .catch((err) => errorRes(res, err));
  };
}

function read(model, populate = []) {
  return (req, res) => {
    model.find(...req.body, callbackRes(res)).populate(...populate);
  };
}

function update(model, populate = []) {
  return (req, res) => {
    model.findByIdAndUpdate(
      req.params._id,
      req.body,
      { new: true },
      callbackRes(res),
    ).populate(...populate);
  };
}

function remove(model) {
  return (req, res) => {
    model.findByIdAndRemove(req.params._id, callbackRes(res));
  };
}

function randomOne(model) {
  return (req, res) => {
    model.findOneRandom(callbackRes(res));
  };
}

module.exports = {
  create,
  read,
  update,
  remove,
  randomOne,
};

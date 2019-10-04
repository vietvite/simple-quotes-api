const router = require('express').Router();
const bcryptjs = require('bcryptjs');

const userModel = require('../models/user.model');
const { errorRes, successRes } = require('../common/response');
const { create } = require('../common/crud');


function isValidPassword(req, res, next) {
  const { password } = req.body;
  if (!password || password.length < 6) {
    const err = 'invalid password';
    const errMsg = 'password is to short';
    return errorRes(res, err, errMsg);
  }
  return next();
}

function isValidEmail(req, res, next) {
  const { email } = req.body;
  userModel.findOne({ email })
    .then((rs) => {
      if (rs) {
        const err = 'email is already exist';
        const errMsg = 'email or password is not valid';
        return errorRes(res, err, errMsg);
      }
      return next();
    })
    .catch((err) => errorRes(res, err));
}

function hashPassword(req, res, next) {
  const { password } = req.body;
  const salt = bcryptjs.genSaltSync(10);
  bcryptjs.hash(password, salt, (err, hashedPassword) => {
    if (err) return errorRes(res, err, 'unable signup, try again');

    req.body.password = hashedPassword;
    return next();
  });
}

router
  .post('/signup', isValidPassword, isValidEmail, hashPassword, create(userModel))
  .get('/signup', (req, res) => {
    successRes(res, { page: 'login' });
  });
// .post('/signin', isValidPassword, findByEmail, verifyPassword, signin);

module.exports = router;

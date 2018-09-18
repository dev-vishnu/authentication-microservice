
const express = require('express');
const logger = require('../common/winston_config');


const authController = require('../controller/signUp_controller');

const auth = express.Router();

auth.post('/register', async (req, res) => {
  const user = (req.body);
  logger.info(user);
  const result = await authController.registerUser(user);
  res.send(result);
});


auth.post('/login', async (req, res) => {
  const user = req.body;
  const result = await authController.userValidation(user);
  res.send(result);
});
module.exports = auth;

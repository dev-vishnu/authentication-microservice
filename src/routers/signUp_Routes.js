
const express = require('express');
const logger = require('../common/winston_config');

const register = require('../controller/signUp_controller');

const auth = express.Router();

auth.post('/register', async (req, res) => {
  const user = (req.body);
  const result = await register.registerUser(user);
  if (!result) {
    res.sendStatus(400);
    res.send('Register failed');
    logger.info(`Registration failed for ${user.username}`);
  } else {
    logger.info(`${result.ops[0].username} Registered`);
    res.redirect('/login');
  }
});

module.exports = auth;


import { Router } from 'express';
import winston from '../common/winston_config';


import { registerUser, userValidation } from '../controller/auth_controller';
import verifytoken from '../token/tokenVerify';

const auth = Router();

auth.post('/register', async (req, res) => {
  const user = (req.body);
  if (await verifytoken(user.token)) {
    try {
      const result = await registerUser(user);
      res.status(200).send(result);
    } catch (error) {
      winston.logger.info(error);
      res.send(false);
    }
  } else {
    res.sendStatus(401);
  }
});


auth.post('/login', async (req, res) => {
  const user = req.body;
  if (await verifytoken(user.token)) {
    try {
      winston.logger.info(`login request for ${user.username} recieved`);
      const result = await userValidation(user);
      res.send(result);
    } catch (error) {
      winston.logger.info(error);
      res.send(false);
    }
  } else {
    res.sendStatus(401);
  }
});
export default auth;


import { Router } from 'express';
import winston from '../common/winston_config';
import { registerUser, userValidation } from '../controller/auth_controller';

const auth = Router();

auth.post('/register', async (req, res) => {
  try {
    const user = (req.body);
    const result = await registerUser(user);
    res.status(200).send(result);
  } catch (error) {
    winston.logger.info(error);
    res.send(false);
  }
});


auth.post('/login', async (req, res) => {
  try {
    const user = req.body;
    winston.logger.info(`login request for ${user.username} recieved`);
    const result = await userValidation(user);
    res.send(result);
  } catch (error) {
    winston.logger.info(error);
    res.send(false);
  }
});
export default auth;

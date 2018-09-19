import { Router } from 'express';
// const logger = require('../common/winston_config');

const home = Router();

home.get('/', (req, res) => {
  res.send('Welcome to Venom Authentication API Service');
});

export default home;

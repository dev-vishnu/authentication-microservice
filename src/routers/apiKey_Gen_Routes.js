import { Router } from 'express';

import generateToken from '../controller/generate_token_controller';

const apiKeyGen = Router();

apiKeyGen.get('/', async (req, res) => {
  const app = req.query.app_name;
  const token = generateToken(app);
  res.json({ apikey: token });
});

export default apiKeyGen;

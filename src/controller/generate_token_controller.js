import { sign } from 'jsonwebtoken';

function generateToken(app) {
  const token = sign({ username: app }, 'venom');
  return token;
}
export default generateToken;

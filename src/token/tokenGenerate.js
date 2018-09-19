import { sign } from 'jsonwebtoken';

async function generateToken() {
  const token = await sign({ username: 'vishnu' }, 'unhsiv');
  return token;
}
generateToken();
export default generateToken;

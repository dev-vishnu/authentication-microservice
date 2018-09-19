import { verify } from 'jsonwebtoken';

async function verifyToken(token) {
  try {
    const user = await verify(token, 'unhsiv');
    if (user.username === 'vishnu') {
      return true;
    }
    return false;
  } catch (err) {
    return false;
  }
}

export default verifyToken;

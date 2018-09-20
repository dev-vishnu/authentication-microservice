import { verify } from 'jsonwebtoken';

function verifyToken(req, res, next) {
  try {
    const user = verify(req.body.token, 'unhsiv');
    if (user !== undefined) {
      next();
    } else {
      res.sendStatus(401);
    }
  } catch (err) {
    res.sendStatus(401);
  }
}

export default verifyToken;

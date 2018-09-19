import { compare, hash as _hash } from 'bcrypt';
import authDB from '../Config/authDb';

async function userValidation(user) {
  const dbo = await authDB.authDB();
  const query = { username: user.username };
  const result = await dbo.collection('users').find(query).toArray();
  if (result.length === 0) {
    return false;
  }
  const hash = result[0].password;
  const isMatch = await compare(user.password, hash);
  if (isMatch) {
    return result[0].username;
  }
  return false;
}

async function registerUser(userdetails) {
  try {
    const user = userdetails;
    const dbo = await authDB.authDB();
    const query = { username: userdetails.username };
    const check = await dbo.collection('users').find(query).toArray();
    if (check.length === 0) {
      const hash = await _hash(user.password, 10);
      user.password = hash;
      const result = await dbo.collection('users').insertOne(user);
      return result.ops[0].username;
    }
    return false;
  } catch (err) {
    return false;
  }
}

export { registerUser };
export { userValidation };

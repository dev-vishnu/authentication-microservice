const bcrypt = require('bcrypt');
const authDB = require('../DbConfig/authDb.js');

async function userValidation(user) {
  const dbo = await authDB.authDB();
  const query = { username: user.username };
  const result = await dbo.collection('users').find(query).toArray();
  console.log(result);
  if (result.length === 0) {
    return false;
  }
  const hash = result[0].password;
  const isMatch = await bcrypt.compare(user.password, hash);
  if (isMatch) {
    return result[0];
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
      const hash = await bcrypt.hash(user.password, 10);
      user.password = hash;
      const result = await dbo.collection('users').insertOne(user);
      return result;
    }
    return false;
  } catch (err) {
    return false;
  }
}

module.exports.registerUser = registerUser;
module.exports.userValidation = userValidation;

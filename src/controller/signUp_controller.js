const bcrypt = require('bcrypt');
const authDB = require('../DbConfig/authDb.js');

async function findUserByUsername(username) {
  const dbo = await authDB.authDB();
  const query = { username };
  const result = await dbo.collection('users').find(query).toArray();
  if (result.length === 0) {
    return false;
  }
  return result[0];
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
module.exports.findUserByUsername = findUserByUsername;

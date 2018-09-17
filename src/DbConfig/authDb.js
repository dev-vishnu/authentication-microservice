const mongoClient = require('mongodb').MongoClient;
const logger = require('../common/winston_config.js');

async function authDB() {
  try {
    const db = await mongoClient.connect('mongodb://localhost:27017');
    const dbo = await db.db('authUsers');
    return dbo;
  } catch (err) {
    logger.info(err);
    return err;
  }
}

module.exports.authDB = authDB;

import { MongoClient as mongoClient } from 'mongodb';
import winston from '../common/winston_config';

async function authDB() {
  try {
    const db = await mongoClient.connect('mongodb://localhost:27017');
    const dbo = await db.db(process.env.db || 'authUsers');
    return dbo;
  } catch (err) {
    winston.logger.info(err);
    return err;
  }
}


export default { authDB };

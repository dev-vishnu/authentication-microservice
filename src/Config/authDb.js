import { MongoClient as mongoClient } from 'mongodb';
import winston from '../common/winston_config';

async function authDB() {
  try {
    const db = await mongoClient.connect('mongodb://vishnu:password123@ds115613.mlab.com:15613/authusers');
    const dbo = await db.db(process.env.db || 'authusers');
    return dbo;
  } catch (err) {
    winston.logger.info(err);
    return err;
  }
}


export default { authDB };

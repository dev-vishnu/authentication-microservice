import express from 'express';
import { urlencoded, json } from 'body-parser';
import morgan from 'morgan';
import appRoot from 'app-root-path';
import cors from 'cors';
import winston from './common/winston_config';
import auth from './routers/auth_Routes';
import home from './routers/home_Routes';
import apiKeyGen from './routers/apiKey_Gen_Routes';

import verifyToken from './common/verify_token_middleware';

const app = express();
app.set('view engine', 'ejs');
app.set('views', `${appRoot}/src/views`);
app.use(morgan('combined', { stream: winston.logger.stream }));
app.use(urlencoded({ extended: true }));
app.use(json());
app.use(cors());
app.use('/', home);
app.use('/auth', verifyToken, auth);
app.use('/getApiKey', apiKeyGen);
app.listen(2000);

export default app;

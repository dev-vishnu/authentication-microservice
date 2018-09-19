import express from 'express';
import { urlencoded, json } from 'body-parser';
import morgan from 'morgan';
import winston from './common/winston_config';

import auth from './routers/auth_Routes';
import home from './routers/home_Routes';


const app = express();
app.use(morgan('combined', { stream: winston.logger.stream }));
app.use(urlencoded({ extended: true }));
app.use(json());

app.use('/', auth);
app.use('/home', home);
app.listen(3000);

export default app;

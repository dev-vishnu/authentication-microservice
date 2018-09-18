const express = require('express');
const bodyParser = require('body-parser');

const auth = require('./routers/signUp_Routes');


const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', auth);
app.listen(3000, () => {
  console.log('listening on 3000');
});

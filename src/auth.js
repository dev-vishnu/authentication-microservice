const express = require('express');
const session = require('express-session');
const passport = require('passport');
const bodyParser = require('body-parser');

const passportConfig = require('./common/passport_strategy.js');
const auth = require('./routers/signUp_Routes');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
passportConfig(passport);
app.use(session({ secret: 'yefaydfcavdfva3210d' }));

app.use(passport.initialize());
app.use(passport.session());
app.use('/', auth);
app.listen(3000, () => {
  console.log('listening on 3000');
});

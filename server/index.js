const express = require('express');
require('./models');
const bodyParser = require('body-parser');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const {
  signInController,
  signUpController,
  userContoroller,
} = require('./controllers');

const app = express();
const port = 5000;

app.use(cookieParser());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(
  cors({
    origin: ['http://localhost:3000'],
    methods: ['GET', 'POST'],
    credentials: true,
  })
);

app.use(
  session({
    secret: 'hwabaek',
    resave: false,
    saveUninitialized: true,
  })
);

app.get('/', (req, res) => {
  res.status(200).send('Success');
});

app.get('/user', userContoroller);
app.post('/signin', signInController);
app.post('/signup', signUpController);

module.exports = app;

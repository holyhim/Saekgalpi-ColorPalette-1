const express = require('express');
require('./models');
const bodyParser = require('body-parser');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const {
  colorEdit,
  colorDrop,
  colorInfo,
  visitCheck,
} = require('/controller/colorController');

const {
  signIn,
  signUp,
  signOut,
  userInfo,
  admin,
} = require('/controller/userController');

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
    secret: '@hwabaek',
    resave: false,
    saveUninitialized: true,
  })
);

app.get('/', (req, res) => {
  res.status(200).send('Success');
});

app.get('/MyPage', userInfo);
app.post('/SignIn', signIn);
app.post('/SignUp', signUp);
app.post('/', signOut);
app.post('/MyPage', admin);

app.get('/PaletteDetail', colorInfo);
app.post('/MyPage', colorDrop);
app.post('/MakePalette', colorEdit);
app.post('/PaletteDetail', visitCheck);

module.exports = app;

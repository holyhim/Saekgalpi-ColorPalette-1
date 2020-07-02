const express = require('express');
require('./models');
const bodyParser = require('body-parser');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const userRouter = require('./routes/user');
const colorRouter = require('./routes/color');

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

app.use('/user', userRouter);
app.use('/color', colorRouter);

// 40, 41번 line에 대한 것은 Check가 필요합니다.

module.exports = app;

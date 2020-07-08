const express = require('express');
require('./models');
const bodyParser = require('body-parser');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const userRouter = require('./routes/user');
const paletteRouter = require('./routes/palette');

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
        secret: '@code',
        resave: false,
        saveUninitialized: true,
    })
);

app.get('/', (req, res) => {
    res.status(200).send('Success');
});

app.use('/', userRouter);
app.use('/', paletteRouter);

app.set('port', port);
app.listen(app.get('port'), () => {
    console.log(`✅ app is listening in PORT ${app.get('port')}`);
});

module.exports = app;

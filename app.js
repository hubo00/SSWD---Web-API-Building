// required imports required by the application
const express = require('express');
const cors = require('cors');

// specify host and port
const HOST = '127.0.0.1';
const PORT = 5000;

// app is a new instance of express
let app = express();

// application settings
app.use((req, res, next) => {
    res.setHeader("Content-Type", "application/json");
    next();
});

// allows app to support different body content types
app.use(express.text());
// support json encoded bodies
app.use(express.json());
// support url encoded bodies
app.use(express.urlencoded({extended: true}));

// cors
app.use(cors({ credentials: true, origin: true}));
app.options('*', cors());

app.use('/', require('./controllers/index'));

app.use('/calculator', require('./controllers/calculator'));

app.use((req, res, next) => {
    const err = new Error('not found: ' + req.method + ":" + req.originalUrl);
    err.status = 404;
    next(err);
});

const server = app.listen(PORT, HOST, () => {
    console.log(`Express server listening on http://localhost:${PORT}`);
})

module.exports = app;
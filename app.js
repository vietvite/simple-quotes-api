const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extented: true}));
app.use(bodyParser.json());

let router = require('./api/routes');
let db = require('./configs/db');
router(app);

app.use((req, res) => {
    res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port);

console.log('Server start listening on: ' + port);

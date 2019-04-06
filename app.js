let express = require('express');
let app = express();
let port = process.env.PORT || 3000;
let router = require('./api/routes');
let db = require('./configs/db');
router(app);

app.listen(port);

console.log('Server start listening on: ' + port);

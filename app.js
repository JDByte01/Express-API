const express = require('express');

//Init express
const app = express();

//Create your endopoints/route handlers
app.get('/', function(req, res) {
    res.send('Hello word!');
});

//Listen on a port
app.listen(5000);
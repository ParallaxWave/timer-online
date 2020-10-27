const express = require('express');
const app = express();
const port = process.env.PORT || 8080
app.listen(port, () => console.log('Listening at ' + port));
app.use(express.static('public'));
app.use(express.json({limit:'1mb'}));

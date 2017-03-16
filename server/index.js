'use strict';

const express = require('express');

const app = express();

app.use(express.static('client'));

const port = process.env.PORT || 80;

app.listen(port, () => {
	console.log('listening on port 80');
});
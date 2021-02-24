const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static('public'));

app.listen(3000, () => console.log('server is listening on http://localhost:3000'));
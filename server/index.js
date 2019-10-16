const express = require('express');

const PORT = 3003;
const app = express();
app.use(express.static(__dirname + '/../public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.listen(PORT);

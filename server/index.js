const express = require('express');

const PORT = 3003;
const app = express();
app.use(express.static('../public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.listen(PORT);

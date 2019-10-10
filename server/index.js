const express = require('express');

const PORT = 3003;
const app = express();
app.use(express.static())


app.listen(PORT);

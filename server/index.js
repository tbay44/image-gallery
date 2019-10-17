const express = require('express');
const path = require('path');

const PORT = 3003;
const app = express();
app.use(express.static(path.join(__dirname, '/../dist')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`listening on port: ${PORT}`);
});

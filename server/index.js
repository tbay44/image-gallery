const express = require('express');
const path = require('path');
const cors = require('cors');
const db = require('../database/index.js');

const PORT = 3003;
const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, '/../dist')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`listening on port: ${PORT}`);
});

app.get('/product/:id', (req, res) => {
  db.getProductById(req.params.id, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      const photos = [];
      if (result[0].prime_pic) {
        photos.push(result[0].prime_pic);
      }
      if (result[0].pic_1) {
        photos.push(result[0].pic_1);
      }
      if (result[0].pic_2) {
        photos.push(result[0].pic_2);
      }
      res.send(photos);
    }
  });
});

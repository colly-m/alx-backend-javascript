const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const port = 7865;

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

app.get('/cart/:id([0-9]+)', (req, res) => {
  const id = req.params.id;
  res.send(`Payment methods for cart ${id}`);
});

app.get('/available_payments', (req, res) => {
  res.json({
    payment_methods: {
      credit_cards: true,
      paypal: false
    }
  });
});

app.post('/login', (req, res) => {
  const userName = req.body.userName;
  if (userName) {
    res.send(`Welcome ${userName}`);
  } else {
    res.status(400).send('Username is required');
  }
});

app.use((req, res) => {
  res.status(404).send('Not Found');
});

app.listen(port, () => {
  console.log(`API available on localhost port ${PORT}`);
});

module.exports = [app, port];

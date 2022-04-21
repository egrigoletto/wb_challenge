const express = require('express');
const router = express.Router();

router.get('/', (_, res) => {
  res.status(204)
  res.send()
});

router.get('/example', (_, res) => {
  res.status(200)
  res.send({
      message: 'Este é um exemplo, se você está o lendo, a aplicação está ok'
  })
});

module.exports = router

const app = require('./app');
const dotenv = require("dotenv").config();
const HOST = '0.0.0.0';

app.listen(process.env.PORT || 8080, () => {
  console.log('Servidor rodando')
})
const {
  isNil,
  isEmpty, 
  match,
  not,
  or 
} = require('ramda');

const validateData = (req, res, next) => {
  const { email } = req.body;
  let isValid = true;
  let message = '';
  if (or(isEmpty(email), isNil(email))) {
    isValid = false;
    message = 'E-mail não pode estar vazio';
  } else if (isEmpty(match(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/, email))) {
    isValid = false;
    message = 'E-mail em formato inválido';
  }
  if (not(isValid)) {
    res
    .status(400)
    .send({
      mensagem: message
    })
  }
  else next();
}

module.exports = { validateData }

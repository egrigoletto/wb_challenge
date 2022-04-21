const {
  isNil,
  isEmpty, 
  is,
  not,
  or 
} = require('ramda');
const validateSendData = (req, res, next) => {
  const { agencia, conta } = req.body;
  let isValid = true;
  let errorMessages = [];
  if (or(isEmpty(agencia), isNil(agencia))) {
    isValid = false;
    errorMessages.push('O campo agencia não pode estar vazio ou ausente');
  }
  if (or(isEmpty(conta), isNil(conta))) {
    isValid = false;
    errorMessages.push('O campo conta não pode estar vazio ou ausente');
  } 
  if (not(is(String, agencia))) {
    isValid = false;
    errorMessages.push('O campo agencia deve ser uma string');
  }
  if (not(is(String, conta))) {
    isValid = false;
    errorMessages.push('O campo conta deve ser uma string');
  }
  if (not(isValid)) {
    res
    .status(400)
    .send({
      mensagem: 'A validação encontrou um ou mais erros',
      erros: errorMessages
    })
  }
  else next();
}

module.exports = { validateSendData }

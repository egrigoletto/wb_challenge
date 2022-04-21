const { test } = require('ramda');

const formatKeyDisplayData = ({ key }) => {
  if (test(/[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}/g, key)) {
    return {
      cpf: key.replace('.', '').replace('.', '').replace('-', '')
    }
  } else if ((test(/(\+\d{2}?\s)(\(?\d{2}\)?\s)?(\d{4,5}\-\d{4})/i, key))) {
    return {
      telefone: key.replace(' ', '').replace(' ', '').replace('-', '')
    }
  } else {
    return {
      email: key
    }
  }
}

module.exports = { formatKeyDisplayData }
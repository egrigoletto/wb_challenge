const express = require('express');
const { pick } = require('ramda');
const router = express.Router();
const { validateData } = require('../validations/validateCustomerData');
const { validateSendData } =  require('../validations/validateAccountData');
const { reproccessPixKey, getBalance } = require('../controllers/customer');

router.post('/resend_transaction' , validateData , async (req, res) => {
  try {
    const reprocessingData =  await reproccessPixKey(req.body);
    if (reprocessingData.isReprocessed) {
      res
      .status(200)
      .send(
        pick([
        'mensagem',
        'agencia',
        'conta',
        'cpf',
        'telefone',
        'email'
      ], reprocessingData))
    } else {
      res
      .status(400)
      .send({
        mensagem: 'Transação não reprocessada',
        motivo: reprocessingData.motivo
      })
    }
  } catch (e) {
    res
    .status(503)
    .send({
      mensagem: "Erro ao reprocessar a informação",
      erro: e.message
    })
  }
});

router.post('/balance', validateSendData, async (req, res) => {
  try {
    const accountBalanceData = await getBalance(req.body)
    if (accountBalanceData.retrieved) {
      res
      .status(200)
      .send({
        saldo: accountBalanceData.balance
      })
    } else {
      res
    .status(400)
    .send({
      mensagem: 'Não foi possível recuperar os dados de saldo',
      motivo: accountBalanceData.motivo
    })
    }
    
  } catch (e) {
    res
    .status(503)
    .send({
      mensagem: "Erro ao obter os dados de saldo a informação",
      erro: e.message
    })
  }
});


module.exports = router

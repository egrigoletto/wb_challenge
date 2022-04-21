const { 
  retrieveAccountData, 
  retrieveCustomerAcountData,
  retriveDataByAccount,
  retriveBalanceData 
} = require('../services/customer');
const { formatKeyDisplayData } = require('../utils/formatter');
const { find, propEq, isNil  } = require('ramda');
const { not } = require('ramda');

const reproccessPixKey = async ({ email }) => {
  const reprocessingAccountsList = await retrieveAccountData();
  const acconutData = find(propEq('email', email))(reprocessingAccountsList);
  if (isNil(acconutData)) {
    return {
      isReprocessed: false,
      motivo: 'Não foram encontradas transações para o parâmetro solicitado'
    }
  }

  const customerAccountData = await retrieveCustomerAcountData(acconutData)
  if (isNil(customerAccountData)) {
    return {
      isReprocessed: false,
      motivo: 'Dados bancários não encontrados'
    }
  }

  const balance = getBalanceData = await retriveBalanceData()
  const reprocessingData = {
    isReprocessed: true,
    mensagem: 'Transação reprocessada com sucesso',
    agencia: customerAccountData.agency,
    conta: customerAccountData.account
  }
  if (balance) {
    return { ...reprocessingData, ...formatKeyDisplayData(acconutData)}
  }
  return reprocessingData
}

const getBalance = async ({agencia, conta}) => {
  const accountData = await retriveDataByAccount(agencia, conta);
  if (not(accountData)) {
    return {
      retrieved: false,
      motivo: 'Dados bancários não encontrados'
    }
  }
  const { balance } = await retriveBalanceData()
  return {
    retrieved: true,
    balance
  }
}

module.exports = { reproccessPixKey, getBalance }

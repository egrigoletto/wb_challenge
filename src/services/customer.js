const axios = require('axios');
const {
  not,
  find,
  head,
  isNil,
  isEmpty,
  propEq
} = require('ramda');

const retrieveAccountData = async () => {
  const config =  {
      method: 'get',
      url: 'https://run.mocky.io/v3/c3bdfbf6-d789-4e52-829c-bddbb886c3be'
  } 
  try {
    const mockedAccountData = await axios(config);
    return mockedAccountData.data
  } catch (error) {
    return (error)
  }
}

const retrieveCustomerAcountData = async ({ customerID }) => {
  const config =  {
    url: 'https://run.mocky.io/v3/85c286b6-e483-420f-9f2b-1ca57ae06c52',
    method: 'get'
  }
  try {
    const mockedAccountData = await axios(config);
    if (not(isNil(mockedAccountData.data))) {
      const { data } = mockedAccountData
      const targetAccountData = [];
      data.map(account => {
        const customerData = find(propEq('customerID', customerID))(account.customers)
        if (not(isNil(customerData))) targetAccountData.push(customerData)
      })
      return isEmpty(targetAccountData) ? null : head(targetAccountData)
    }
    return null
  } catch (error) {
    return (error)
  }
}

const retriveBalanceData = async () => {
  const config =  {
    method: 'get',
    url: 'https://run.mocky.io/v3/e0f453b7-620c-4479-839e-28ac58111fca'
  }
  try {
    const mockedAccountData = await axios(config);
    return mockedAccountData.data
  } catch (error) {
    return error
  }
}

const retriveDataByAccount = async (agency, account) => {
  const config =  {
    url: 'https://run.mocky.io/v3/85c286b6-e483-420f-9f2b-1ca57ae06c52',
    method: 'get'
  }
  try {
    const mockedAccountData = await axios(config);
    if (not(isNil(mockedAccountData.data))) {
      const { data } = mockedAccountData
      const customerListData = [];
      data.map(account => {
        const customerData = find(propEq('agency', agency))(account.customers)
        if (not(isNil(customerData))) customerListData.push(customerData)
      })
      if (isEmpty(customerListData)) {
        return null
      }
      return find(propEq('account', account))(customerListData)
    }
  } catch (error) {
    return (error)
  }
}

module.exports = {
  retrieveAccountData,
  retrieveCustomerAcountData,
  retriveDataByAccount,
  retriveBalanceData
}

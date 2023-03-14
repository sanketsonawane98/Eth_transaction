// https://eth-ropsten.alchemyapi.io/v2/1h_wkKfVo2skKqFaPLIkOZDD9-2IE7hI

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/1h_wkKfVo2skKqFaPLIkOZDD9-2IE7hI',
      accounts: ['account private key']
    //   accounts: ['account private key']
    },
    sepolia: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/1h_wkKfVo2skKqFaPLIkOZDD9-2IE7hI',
      //Sepolia private key :: ec4ac6a10ed5cf237afa9ef3851c337dfe75266b60d8ad0dfe4eadeeab22bce5
      accounts: ['account private key']
    //   accounts: ['account private key']
    }
  }
}

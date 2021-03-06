require("@nomiclabs/hardhat-waffle");
require('dotenv').config();

const PROJECT_ID = process.env.INFURA_PROJECT_ID;
const PRIVATE_KEY = process.env.DEPLOYER_SIGNER_PRIVATE_KEY;

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${PROJECT_ID}`,
      accounts: [PRIVATE_KEY]
    }
  }
};

require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */

const GOERLI_URL =process.env.GOERLI_URL;
const PRIVATE_KEY=process.env.PRIVATE_KEY;
const LOCAL_HOST_URL= process.env.LOCAL_HOST_URL;
const LOCAL_HOST_PRIVATE_KEY=process.env.LOCAL_HOST_PRIVATE_KEY;

module.exports = {
  solidity: "0.8.17",
  defaultNetwork:"hardhat",
  networks:{
    goerli: {
      url: GOERLI_URL,
      accounts: [PRIVATE_KEY],
      chainId: 5,
  },
  localHost: {
      url: LOCAL_HOST_URL,
       accounts: [LOCAL_HOST_PRIVATE_KEY],
      chainId: 31337,
  },

  }
};

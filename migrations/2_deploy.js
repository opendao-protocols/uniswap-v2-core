const UniswapV2Factory = artifacts.require("UniswapV2Factory");

const FEE_TO_SETTER_ADDRESS = "0xcBc306d7B7C6E711e0Cf43E3A154bA473a79b382"

module.exports = function (deployer) {
  deployer.deploy(UniswapV2Factory, FEE_TO_SETTER_ADDRESS);
};

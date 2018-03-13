var MartToken = artifacts.require("./MartToken.sol");

module.exports = function(deployer) {
  deployer.deploy(MartToken);
};

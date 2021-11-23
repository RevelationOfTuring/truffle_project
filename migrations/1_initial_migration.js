const Crypto = artifacts.require("Crypto");

module.exports = function (deployer) {
    deployer.deploy(Crypto, "0x09C4eDAFED8eaDdc4EBC7BB15AC401a6b406b7ef", "Michael.W");
};
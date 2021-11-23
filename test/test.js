const Crypto = artifacts.require("Crypto");

contract('Crypto', function (accounts) {
    it("check the state variable", async function () {
        let i = await Crypto.deployed();

        let myWord = await i.myWord();
        assert.equal(myWord, "Michael.W", "my word is wrong");

        let myAddr = await i.getMyAddr();
        assert.equal(myAddr, accounts[0], "my address is wrong");
    });
});
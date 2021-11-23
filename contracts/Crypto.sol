// SPDX-License-Identifier: MIT

pragma solidity 0.6.12;

contract Crypto {
    address _myAddr;
    string public myWord;

    constructor(address myAddr, string memory myWord_) public {
        _myAddr = myAddr;
        myWord = myWord_;
    }

    function getMyAddr() public view returns (address){
        return _myAddr;
    }

    function setMyAddr(address myAddr) public {
        _myAddr = myAddr;
    }

    function killMe() public {
        if (msg.sender == _myAddr)
            selfdestruct(payable(_myAddr));
    }
}

//SPDX-License-Identifier: UNLICENSED

pragma solidity >=0.5.0 < 0.9.0;
 

 contract token 
 {
     //contract token
        string public name = "hardHat";
        string public symbol = "HHT";
        uint totalSupply = 10000;

        address public owner;
        mapping (address=> uint) balances;  //how much token in  particular adress 


        constructor (){
                balances[msg.sender]= totalSupply;
                owner=msg.sender;
        }


        function transfer(address to, uint amount) external {
            require(balances[msg.sender]>=amount , "Not enough tokens");
            balances[msg.sender]-=amount;
            balances[to]+=amount;
        }
function balanceof(address account ) external view returns(uint256){
    return balances[account];
}



 }
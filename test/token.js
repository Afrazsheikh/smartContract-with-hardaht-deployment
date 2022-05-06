const {expect} = require ("chai");


 describe ("token contract", function(){
     
    
    it("assign total supply to the owner" , async function(){


        const [owner] = await ethers.getSigners(); // by using signer we can extract the information about adress , balance 

        console.log("signer object", owener );

        const token = await ethers.getContractFactory("token"); //getContractFactory help to create  instances 
        const hardhatToken  = await token.deploy();   // deploye contract 
        const ownerbalance  = await hardhatToken.balanceof(owner.address); // check owner balace which is equal to the 10000
        console.log("owner adress",  owner.address);

        // chai libarary 
        expect(await hardhatToken.totalSupply().to.equal(ownerbalance)); // total balace is equal to the owner balace cherckn bhere 
    })
     
     

})
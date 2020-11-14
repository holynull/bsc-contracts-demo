const HelloWorldContract = artifacts.require("HelloWorld");

module.exports = async function (deployer) {
    if (deployer.network_id == 1605266404818) {
        // await deployer.deploy(HelloWorldContract, param1, param2, param3, param4);
       await deployer.deploy(HelloWorldContract);
    } else if (deployer.network_id == 56) { // bsc mainnet
        // await deployer.deploy(HelloWorldContract, param1, param2, param3, param4);
        await deployer.deploy(HelloWorldContract);
    } else if (deployer.network_id == 97) { // bsc testnet
        // await deployer.deploy(HelloWorldContract, param1, param2, param3, param4);
        await deployer.deploy(HelloWorldContract);
    } else {
    }
};

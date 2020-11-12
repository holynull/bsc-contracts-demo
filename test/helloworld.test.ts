import { expect, assert } from 'chai';
import {
    HelloWorldContract, HelloWorldInstance
} from '../build/types/truffle-types';
// Load compiled artifacts
const HelloWorld: HelloWorldContract = artifacts.require('HelloWorld.sol');
import { BigNumber } from 'bignumber.js';

contract('HelloWorld Contract', async accounts => {


    let contractInstance: HelloWorldInstance;

    let decimal: BigNumber;
    let symbol: string;
    let name: string;

    before('获取发布的合约实例', async () => {
        contractInstance = await HelloWorld.deployed();
        console.log('address: ' + contractInstance.address);
        decimal = await contractInstance.decimals();
        console.log('decimals: ' + decimal);
        symbol = await contractInstance.symbol();
        console.log('symbol: ' + symbol);
        name = await contractInstance.name();
        console.log('name: ' + name);
    });


    describe('发布以后', async () => {

        it('测试doSomething', async () => {
            await contractInstance.doSomething(2);
            let result = await contractInstance.getB();
            expect(result.toString()).equal('3');
        });
    });

});

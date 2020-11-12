# BSC链合约开发

github: holynull

https://github.com/holynull/bsc-contracts-demo

## 前期准备

Node

npm

nvm

语言：Solidity

建议使用node 10，nvm use 10

truffle: 很好用的以太坊的开发框架。

https://www.trufflesuite.com/docs/truffle/overview

npm install -g truffle

openzepplin:

主要用它的一些库和安全机制，例如OwnerShip来管理所有者，安全计算，以及将安全的ERC20标准合约模板，迁移到BSC项目上。

https://docs.openzeppelin.com/openzeppelin/

Ganache 是一个本地的模拟链，我们可以将合约发布到上面来进行本地测试。 

https://github.com/trufflesuite/ganache-cli

npm install -g ganache-cli

## 生成一个助记词

安装助记词组件

npx mnemonics

编辑secret.js

```
module.exports = {
    mnemonic: "",
};
```

注意这个文件不要发到github上去了

## 配置truffle的network

## 创建一个合约HolleWorld

## 编译合约

truffle compile && typechain --target=truffle --outDir build/types/truffle-types \"build/contracts/*.json\"

npm run t:compile

## 发布到本地

启动Ganache

truffle migrate --f=1 --to=1 --network=dev

## 运行本地测试

truffle test test/helloworld.test.ts --network=dev

## 发布到testnet

先去faucet获取BNB

查找账户地址

npx oz accounts

0x6291D14Fe1357084B0e1A1ddDE6a36d9ffCbE200

https://testnet.binance.org/faucet-smart

查余额

npx oz balance 0x6291D14Fe1357084B0e1A1ddDE6a36d9ffCbE200

发布到testnet

truffle migrate --f=1 --to=1 --network=bsc_test

去bscscan上查看
https://testnet.bscscan.com/

## testnet上测试

truffle test test/helloworld.test.ts --network=bsc_test

怎么知道刚才是在testnet上进行了测试呢，我们去bscscan上查一下。





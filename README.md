# BSC链合约开发

github: holynull

https://github.com/holynull/bsc-contracts-demo

## 所需的知识背景和准备

首先我们要对Node有一些了解，会用npm等一些node的工具。

这里我们推荐使用一个工具，叫nvm。 这个工具主要用来管理node的版本，切换node版本很方便。
这里根据我的经验，建议使用node 10，我们通过命令nvm use 10, 这样我们就可以把node切换的version 10

开发合约的语言语言：Solidity，当然，你也可以选择Ivy,艾薇 
我们这里就以Solidity为例，讲一下。

然后呢，我介绍一下我们使用的框架。

truffle: 很好用的以太坊合约的开发框架。
详细介绍呢，我们可以访问下面的这个链接
https://www.trufflesuite.com/docs/truffle/overview
truffle的安装命令：
npm install -g truffle

另一个框架是openzepplin:

这个框架，我们主要用它的一些库和安全机制，基本都可以迁移到BSC项目上使用。
openzepplin的详细介绍请访问下面的链接
https://docs.openzeppelin.com/openzeppelin/

最后，我们需要一个本地的链，在本地测试我们的合约。我们这里使用Ganache。
他的详细介绍，请访问下面的链接
https://github.com/trufflesuite/ganache-cli
ganache的安装命令
npm install -g ganache-cli

## 项目目录结构

我们看一下，项目的目录结构。

contracts目录呢，主要是放我们的合约代码的。migrations目录主要是放我们编写的部署脚本。
部署脚本呢，都是用javascript编写的。
test目录呢，是存放我们的测试脚本的。测试脚本也是用javascript开发的。
其他的就是跟node项目相关的目录，以及编译工具输出的目录。


下面我们正式进入开流程。
我们首先需要一个钱包地址，用来发布我们的合约，和进行测试。
## 生成一个助记词
在我的这个项目里，可以直接使用下面的命令，生成助记词。

npx mnemonics


然后，编辑secret.js

```
module.exports = {
    mnemonic: "",
};
```

注意为了安全起见，这个文件不要发到github上去了

为了开发调试的时候更直观的管理钱包，我们可以将这个助记词导入到币安的钱包里。

## 配置truffle的network

接下来，我们配置一下truffle的network。

## 创建一个合约HolleWorld

## 编译合约

npm run t:compile

## 发布到本地

启动Ganache

npm run g:start

truffle migrate --f=1 --to=1 --network=dev

看一下migration的脚本

## 运行本地测试

看一下测试脚本

truffle test test/helloworld.test.ts --network=dev

## 发布到testnet

发布到testnet之前，我们需要一些testnet上bnb。

先去faucet获取BNB
https://testnet.binance.org/faucet-smart

查找账户地址

npx oz accounts



https://testnet.binance.org/faucet-smart

查余额

npx oz balance 0x6291D14Fe1357084B0e1A1ddDE6a36d9ffCbE200

发布到testnet

truffle migrate --f=1 --to=1 --network=bsc_test

去bscscan上查看
https://testnet.bscscan.com/

## testnet上测试

我们现在就可以在testnet上测试脚本了。

truffle test test/helloworld.test.ts --network=bsc_test

怎么知道刚才是在testnet上进行了测试呢，我们去bscscan上查一下。

https://testnet.bscscan.com/

## 发布到mainnet上

首选需要我们的地址上又一些BNB，用来付gas fee。

我们可以通过bridge：从钱包中把ERC20的BNB转到我们的地址上。

https://www.binance.org/en/bridge# 

或者，我们从币安的交易所的账号中，提取一些BNB到我们BSC的地址上。

然后，我们就可以发布合约到主网了。

从另外一个钱包转账到当前开发account上

truffle migrate --f=1 --to=1 --network=bsc_main

## 更多关于BSC

https://www.binance.org/en/smartChain







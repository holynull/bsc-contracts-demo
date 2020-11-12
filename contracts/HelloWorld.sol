pragma solidity ^0.6.0;

import "./BEP20.sol";
import "./interfaces/IBEP20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract HelloWorld is BEP20("Hello World Contract", "HWC"), Ownable {
    using SafeMath for uint256;

    uint256 b;

    function doSomething(uint256 a) external {
        b = a.add(1);
    }

    function getB() external view returns (uint256 r) {
        r = b;
    }
}

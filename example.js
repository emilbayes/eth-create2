const create2 = require('.')

// From EIP test vectors
const creatorAddress = '0xdeadbeef00000000000000000000000000000000'
const salt = '0x0000000000000000000000000000000000000000000000000000000000000000'
const initCode = '0x00'

const address = create2(creatorAddress, salt, initCode)

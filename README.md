# `eth-create2`

[![Build Status](https://travis-ci.org/emilbayes/eth-create2.svg?branch=master)](https://travis-ci.org/emilbayes/eth-create2)

> Generate Ethereum CREATE2 addresses

## Usage

```js
const create2 = require('eth-create2')

// From EIP test vectors
const creatorAddress = '0xdeadbeef00000000000000000000000000000000'
const salt = '0x0000000000000000000000000000000000000000000000000000000000000000'
const initCode = '0x00'

const address = create2(creatorAddress, salt, initCode)

// address === '0xb928f69bb1d91cd65274e3c79d8986362984fda3'
```

## API

### `const resultAddress = create2(address, salt, initCode)`

Generate Ethereum CREATE2 address. Arguments can either be in the usual
Ethereum hex encoded string form or `Buffer`s. Note that `address` is the
address of the contract executing the `create2` instruction.
Returns `resultAddress` as hex encoded string. Not checksum'ed, but this can be
done with `eth-checksum` or similar modules.

## Install

```sh
npm install eth-create2
```

## License

[ISC](LICENSE)

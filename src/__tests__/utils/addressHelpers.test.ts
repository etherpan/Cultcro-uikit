import { getAddress } from 'utils/addressHelpers'

describe('getAddress', () => {
  const address = {
    25: '0x5C7F8A570d578ED84E63fdFA7b1eE72dEae1AE23',
    97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
  }

  it(`get address for mainnet (chainId 25)`, () => {
    process.env.REACT_APP_CHAIN_ID = '25'
    const expected = address[25]
    expect(getAddress(address)).toEqual(expected)
  })
  it(`get address for testnet (chainId 97)`, () => {
    process.env.REACT_APP_CHAIN_ID = '97'
    const expected = address[97]
    expect(getAddress(address)).toEqual(expected)
  })
  it(`get address for any other network (chainId 31337)`, () => {
    process.env.REACT_APP_CHAIN_ID = '31337'
    const expected = address[25]
    expect(getAddress(address)).toEqual(expected)
  })
})

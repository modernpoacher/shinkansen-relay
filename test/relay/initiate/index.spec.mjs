import {
  expect
} from 'chai'

import initiate from '#relay/relay/initiate'

describe('#relay/relay/initiate', () => {
  it('is a function', () => {
    expect(initiate)
      .to.be.a('function')
  })
})

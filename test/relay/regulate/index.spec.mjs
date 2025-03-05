import {
  expect
} from 'chai'

import regulate from '#relay/relay/regulate'

describe('#relay/relay/regulate', () => {
  it('is a function', () => {
    expect(regulate)
      .to.be.a('function')
  })
})

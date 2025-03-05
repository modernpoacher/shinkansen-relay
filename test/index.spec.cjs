const {
  expect // @ts-expect-error
} = require('chai')

const {
  Relay
} = require('#relay')

describe('#relay', () => {
  it('is a function', () => {
    expect(Relay).to.be.a('function')
  })
})

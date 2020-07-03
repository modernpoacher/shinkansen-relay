import { expect } from 'chai'

import {
  Signals
} from 'shinkansen-signals'

import Relay from 'shinkansen-relay/relay'

function mock () {
  Signals.raise({
    ALPHA: 'MOCK ALPHA',
    OMEGA: 'MOCK OMEGA',

    EMBARK: 'MOCK EMBARK',
    DEBARK: 'MOCK DEBARK',

    INDEX: 'MOCK INDEX',

    ENTER_ALPHA: 'MOCK ENTER_ALPHA',
    LEAVE_ALPHA: 'MOCK LEAVE_ALPHA',

    CHANGE_ALPHA: 'MOCK CHANGE_ALPHA',
    REMAIN_ALPHA: 'MOCK REMAIN_ALPHA',

    ENTER_OMEGA: 'MOCK ENTER_OMEGA',
    LEAVE_OMEGA: 'MOCK LEAVE_OMEGA',

    CHANGE_OMEGA: 'MOCK CHANGE_OMEGA',
    REMAIN_OMEGA: 'MOCK REMAIN_OMEGA',

    ALPHA_PATTERN: 'MOCK ALPHA_PATTERN',
    OMEGA_PATTERN: 'MOCK OMEGA_PATTERN',

    EMBARK_STAGE: 'MOCK EMBARK_STAGE',
    DEBARK_STAGE: 'MOCK DEBARK_STAGE',

    EMBARK_PATTERN: 'MOCK EMBARK_PATTERN',
    DEBARK_PATTERN: 'MOCK DEBARK_PATTERN',

    ENTER_ALPHA_ENTER_OMEGA: 'MOCK ENTER_ALPHA_ENTER_OMEGA',
    LEAVE_ALPHA_LEAVE_OMEGA: 'MOCK LEAVE_ALPHA_LEAVE_OMEGA',

    CHANGE_ALPHA_ENTER_OMEGA: 'MOCK CHANGE_ALPHA_ENTER_OMEGA',
    CHANGE_ALPHA_LEAVE_OMEGA: 'MOCK CHANGE_ALPHA_LEAVE_OMEGA',

    REMAIN_ALPHA_ENTER_OMEGA: 'MOCK REMAIN_ALPHA_ENTER_OMEGA',
    REMAIN_ALPHA_LEAVE_OMEGA: 'MOCK REMAIN_ALPHA_LEAVE_OMEGA',

    CHANGE_ALPHA_CHANGE_OMEGA: 'MOCK CHANGE_ALPHA_CHANGE_OMEGA',
    CHANGE_ALPHA_REMAIN_OMEGA: 'MOCK CHANGE_ALPHA_REMAIN_OMEGA',

    REMAIN_ALPHA_CHANGE_OMEGA: 'MOCK REMAIN_ALPHA_CHANGE_OMEGA',
    REMAIN_ALPHA_REMAIN_OMEGA: 'MOCK REMAIN_ALPHA_REMAIN_OMEGA',

    EXCEPTION: 'MOCK EXCEPTION',

    FAILURE: 100,
    SUCCESS: 101,
    IN_PROGRESS: 103,
    UNKNOWN: 104,
    COMPLETE: 105
  })
}

describe('shinkansen-relay/relay', () => {
  it('is a function', () => {
    expect(Relay).to.be.a('function')
  })

  describe('`Relay.initiate`', () => {
    it('is a function', () => {
      expect(Relay.initiate).to.be.a('function')
    })
  })

  describe('`Relay.regulate`', () => {
    it('is a function', () => {
      expect(Relay.regulate).to.be.a('function')
    })
  })

  describe('`Relay.initiate()`', () => {
    beforeEach(mock)

    describe('With parameters', () => {
      describe('With `now`', () => {
        describe('`now` has `alpha`', () => {
          it('returns an object with `HAS_ALPHA` and `HAS_ALPHA_CHANGED` both true', () => {
            expect(Relay.initiate({ now: { [Signals.ALPHA]: 'MOCK ALPHA' } }))
              .to.eql({
                HAS_ALPHA: true,
                HAS_OMEGA: false,
                HAS_ALPHA_CHANGED: true,
                HAS_OMEGA_CHANGED: false,
                WAS_ALPHA_DEFINED: false,
                WAS_OMEGA_DEFINED: false
              })
          })
        })

        describe('`now` has `omega`', () => {
          it('returns an object with `HAS_OMEGA` and `HAS_OMEGA_CHANGED` both true', () => {
            expect(Relay.initiate({ now: { [Signals.OMEGA]: 'MOCK OMEGA' } }))
              .to.eql({
                HAS_ALPHA: false,
                HAS_OMEGA: true,
                HAS_ALPHA_CHANGED: false,
                HAS_OMEGA_CHANGED: true,
                WAS_ALPHA_DEFINED: false,
                WAS_OMEGA_DEFINED: false
              })
          })
        })
      })

      describe('With `was`', () => {
        describe('`was` has `alpha`', () => {
          it('returns an object with `HAS_ALPHA_CHANGED` and `WAS_ALPHA_DEFINED` both true', () => {
            expect(Relay.initiate({ was: { [Signals.ALPHA]: 'MOCK ALPHA' } }))
              .to.eql({
                HAS_ALPHA: false,
                HAS_OMEGA: false,
                HAS_ALPHA_CHANGED: true,
                HAS_OMEGA_CHANGED: false,
                WAS_ALPHA_DEFINED: true,
                WAS_OMEGA_DEFINED: false
              })
          })
        })

        describe('`was` has `omega`', () => {
          it('returns an object with `HAS_OMEGA_CHANGED` and `WAS_OMEGA_DEFINED` both true', () => {
            expect(Relay.initiate({ was: { [Signals.OMEGA]: 'MOCK OMEGA' } }))
              .to.eql({
                HAS_ALPHA: false,
                HAS_OMEGA: false,
                HAS_ALPHA_CHANGED: false,
                HAS_OMEGA_CHANGED: true,
                WAS_ALPHA_DEFINED: false,
                WAS_OMEGA_DEFINED: true
              })
          })
        })
      })

      describe('With `now` and `was`', () => {
        describe('`was` and `now` have `alpha`', () => {
          describe('Values are the same', () => {
            it('returns an object with `HAS_ALPHA` and `WAS_ALPHA_DEFINED` both true', () => {
              expect(Relay.initiate({ was: { [Signals.ALPHA]: 'MOCK ALPHA' }, now: { [Signals.ALPHA]: 'MOCK ALPHA' } }))
                .to.eql({
                  HAS_ALPHA: true,
                  HAS_OMEGA: false,
                  HAS_ALPHA_CHANGED: false,
                  HAS_OMEGA_CHANGED: false,
                  WAS_ALPHA_DEFINED: true,
                  WAS_OMEGA_DEFINED: false
                })
            })
          })

          describe('Values are not the same', () => {
            it('returns an object with `HAS_ALPHA` and `HAS_ALPHA_CHANGED` and `WAS_ALPHA_DEFINED` all true', () => {
              expect(Relay.initiate({ was: { [Signals.ALPHA]: 'MOCK ALPHA' }, now: { [Signals.ALPHA]: 'MOCK ALPHA CHANGED' } }))
                .to.eql({
                  HAS_ALPHA: true,
                  HAS_OMEGA: false,
                  HAS_ALPHA_CHANGED: true,
                  HAS_OMEGA_CHANGED: false,
                  WAS_ALPHA_DEFINED: true,
                  WAS_OMEGA_DEFINED: false
                })
            })
          })
        })

        describe('`was` and `now` have `omega`', () => {
          describe('Values are the same', () => {
            it('returns an object with `HAS_OMEGA` and `WAS_OMEGA_DEFINED` both true', () => {
              expect(Relay.initiate({ was: { [Signals.OMEGA]: 'MOCK OMEGA' }, now: { [Signals.OMEGA]: 'MOCK OMEGA' } }))
                .to.eql({
                  HAS_ALPHA: false,
                  HAS_OMEGA: true,
                  HAS_ALPHA_CHANGED: false,
                  HAS_OMEGA_CHANGED: false,
                  WAS_ALPHA_DEFINED: false,
                  WAS_OMEGA_DEFINED: true
                })
            })
          })

          describe('Values are not the same', () => {
            it('returns an object with `HAS_OMEGA` and `HAS_OMEGA_CHANGED` and `WAS_OMEGA_DEFINED` all true', () => {
              expect(Relay.initiate({ was: { [Signals.OMEGA]: 'MOCK OMEGA' }, now: { [Signals.OMEGA]: 'MOCK OMEGA CHANGED' } }))
                .to.eql({
                  HAS_ALPHA: false,
                  HAS_OMEGA: true,
                  HAS_ALPHA_CHANGED: false,
                  HAS_OMEGA_CHANGED: true,
                  WAS_ALPHA_DEFINED: false,
                  WAS_OMEGA_DEFINED: true
                })
            })
          })
        })
      })
    })

    describe('Without parameters', () => {
      it('returns an object with all field values as false', () => {
        expect(Relay.initiate())
          .to.eql({
            HAS_ALPHA: false,
            HAS_OMEGA: false,
            HAS_ALPHA_CHANGED: false,
            HAS_OMEGA_CHANGED: false,
            WAS_ALPHA_DEFINED: false,
            WAS_OMEGA_DEFINED: false
          })
      })
    })
  })

  describe('`Relay.regulate()`', () => {
    const parameters = {
      HAS_ALPHA: true,
      HAS_OMEGA: true,
      HAS_ALPHA_CHANGED: true,
      HAS_OMEGA_CHANGED: true,
      WAS_ALPHA_DEFINED: true,
      WAS_OMEGA_DEFINED: true
    }

    beforeEach(mock)

    describe('With parameters', () => {
      describe('All field values are true', () => {
        it('returns an object with `SIGNAL` as `CHANGE_ALPHA_CHANGE_OMEGA` and `SERVICE` as `001`', () => {
          /*

            {
              HAS_ALPHA: true,
              HAS_OMEGA: true,
              HAS_ALPHA_CHANGED: true,
              HAS_OMEGA_CHANGED: true,
              WAS_ALPHA_DEFINED: true,
              WAS_OMEGA_DEFINED: true
            }

          */
          const p = { ...parameters }
          const r = Relay.regulate(p)

          expect(r).to.eql({
            SIGNAL: Signals.CHANGE_ALPHA_CHANGE_OMEGA,
            SERVICE: '001'
          })
        })
      })

      describe('With field `WAS_OMEGA_DEFINED` is false', () => {
        it('returns an object with `SIGNAL` as `CHANGE_ALPHA_ENTER_OMEGA` and `SERVICE` as `002`', () => {
          /*

            {
              HAS_ALPHA: true,
              HAS_OMEGA: true,
              HAS_ALPHA_CHANGED: true,
              HAS_OMEGA_CHANGED: true,
              WAS_ALPHA_DEFINED: true,
              WAS_OMEGA_DEFINED: false
            }

          */
          const p = { ...parameters, WAS_OMEGA_DEFINED: false }
          const r = Relay.regulate(p)

          expect(r).to.eql({
            SIGNAL: Signals.CHANGE_ALPHA_ENTER_OMEGA,
            SERVICE: '002'
          })
        })
      })

      describe('With field `WAS_ALPHA_DEFINED` as false', () => {
        it('returns an object with `SIGNAL` as `EXCEPTION` and `SERVICE` as `003`', () => {
          /*

            {
              HAS_ALPHA: true,
              HAS_OMEGA: true,
              HAS_ALPHA_CHANGED: true,
              HAS_OMEGA_CHANGED: true,
              WAS_ALPHA_DEFINED: false,
              WAS_OMEGA_DEFINED: true
            }

          */
          const p = { ...parameters, WAS_ALPHA_DEFINED: false }
          const r = Relay.regulate(p)

          expect(r).to.eql({
            SIGNAL: Signals.EXCEPTION,
            SERVICE: '003'
          })
        })
      })

      describe('With fields `WAS_ALPHA_DEFINED` as false and `WAS_OMEGA_DEFINED` as false', () => {
        it('returns an object with `SIGNAL` as `EXCEPTION` and `SERVICE` as `004`', () => {
          /*

            {
              HAS_ALPHA: true,
              HAS_OMEGA: true,
              HAS_ALPHA_CHANGED: true,
              HAS_OMEGA_CHANGED: true,
              WAS_ALPHA_DEFINED: false,
              WAS_OMEGA_DEFINED: false
            }

          */
          const p = { ...parameters, WAS_ALPHA_DEFINED: false, WAS_OMEGA_DEFINED: false }
          const r = Relay.regulate(p)

          expect(r).to.eql({
            SIGNAL: Signals.ENTER_ALPHA_ENTER_OMEGA,
            SERVICE: '004'
          })
        })
      })

      describe('With fields `HAS_OMEGA_CHANGED` as false', () => {
        it('returns an object with `SIGNAL` as `EXCEPTION` and `SERVICE` as `005`', () => {
          /*

            {
              HAS_ALPHA: true,
              HAS_OMEGA: true,
              HAS_ALPHA_CHANGED: true,
              HAS_OMEGA_CHANGED: false,
              WAS_ALPHA_DEFINED: true,
              WAS_OMEGA_DEFINED: true
            }

          */
          const p = { ...parameters, HAS_OMEGA_CHANGED: false }
          const r = Relay.regulate(p)

          expect(r).to.eql({
            SIGNAL: Signals.EXCEPTION,
            SERVICE: '005'
          })
        })
      })

      describe('With fields `HAS_OMEGA_CHANGED` as false and `WAS_OMEGA_DEFINED` as false', () => {
        it('returns an object with `SIGNAL` as `EXCEPTION` and `SERVICE` as `006`', () => {
          /*

            {
              HAS_ALPHA: true,
              HAS_OMEGA: true,
              HAS_ALPHA_CHANGED: true,
              HAS_OMEGA_CHANGED: false,
              WAS_ALPHA_DEFINED: true,
              WAS_OMEGA_DEFINED: false
            }

          */
          const p = { ...parameters, HAS_OMEGA_CHANGED: false, WAS_OMEGA_DEFINED: false }
          const r = Relay.regulate(p)

          expect(r).to.eql({
            SIGNAL: Signals.EXCEPTION,
            SERVICE: '006'
          })
        })
      })

      describe('With fields `HAS_OMEGA_CHANGED` as false and `WAS_ALPHA_DEFINED` as false', () => {
        it('returns an object with `SIGNAL` as `EXCEPTION` and `SERVICE` as `007`', () => {
          /*

            {
              HAS_ALPHA: true,
              HAS_OMEGA: true,
              HAS_ALPHA_CHANGED: true,
              HAS_OMEGA_CHANGED: false,
              WAS_ALPHA_DEFINED: false,
              WAS_OMEGA_DEFINED: true
            }

          */
          const p = { ...parameters, HAS_OMEGA_CHANGED: false, WAS_ALPHA_DEFINED: false }
          const r = Relay.regulate(p)

          expect(r).to.eql({
            SIGNAL: Signals.EXCEPTION,
            SERVICE: '007'
          })
        })
      })

      describe('With fields `HAS_OMEGA_CHANGED` as false and `WAS_ALPHA_DEFINED` as false and `WAS_OMEGA_DEFINED` as false', () => {
        it('returns an object with `SIGNAL` as `EXCEPTION` and `SERVICE` as `008`', () => {
          /*

            {
              HAS_ALPHA: true,
              HAS_OMEGA: true,
              HAS_ALPHA_CHANGED: true,
              HAS_OMEGA_CHANGED: false,
              WAS_ALPHA_DEFINED: false,
              WAS_OMEGA_DEFINED: false
            }

          */
          const p = { ...parameters, HAS_OMEGA_CHANGED: false, WAS_ALPHA_DEFINED: false, WAS_OMEGA_DEFINED: false }
          const r = Relay.regulate(p)

          expect(r).to.eql({
            SIGNAL: Signals.EXCEPTION,
            SERVICE: '008'
          })
        })
      })

      describe('With fields `HAS_ALPHA_CHANGED` as false', () => {
        it('returns an object with `SIGNAL` as `REMAIN_ALPHA_CHANGE_OMEGA` and `SERVICE` as `009`', () => {
          /*

            {
              HAS_ALPHA: true,
              HAS_OMEGA: true,
              HAS_ALPHA_CHANGED: false,
              HAS_OMEGA_CHANGED: true,
              WAS_ALPHA_DEFINED: true,
              WAS_OMEGA_DEFINED: true
            }

          */
          const p = { ...parameters, HAS_ALPHA_CHANGED: false }
          const r = Relay.regulate(p)

          expect(r).to.eql({
            SIGNAL: Signals.REMAIN_ALPHA_CHANGE_OMEGA,
            SERVICE: '009'
          })
        })
      })

      describe('With fields `HAS_ALPHA_CHANGED` as false and `WAS_OMEGA_DEFINED` as false', () => {
        it('returns an object with `SIGNAL` as `REMAIN_ALPHA_ENTER_OMEGA` and `SERVICE` as `010`', () => {
          /*

            {
              HAS_ALPHA: true,
              HAS_OMEGA: true,
              HAS_ALPHA_CHANGED: false,
              HAS_OMEGA_CHANGED: true,
              WAS_ALPHA_DEFINED: true,
              WAS_OMEGA_DEFINED: false
            }

          */
          const p = { ...parameters, HAS_ALPHA_CHANGED: false, WAS_OMEGA_DEFINED: false }
          const r = Relay.regulate(p)

          expect(r).to.eql({
            SIGNAL: Signals.REMAIN_ALPHA_ENTER_OMEGA,
            SERVICE: '010'
          })
        })
      })

      describe('With fields `HAS_ALPHA_CHANGED` as false and `WAS_ALPHA_DEFINED` as false', () => {
        it('returns an object with `SIGNAL` as `EXCEPTION` and `SERVICE` as `011`', () => {
          /*

            {
              HAS_ALPHA: true,
              HAS_OMEGA: true,
              HAS_ALPHA_CHANGED: false,
              HAS_OMEGA_CHANGED: true,
              WAS_ALPHA_DEFINED: false,
              WAS_OMEGA_DEFINED: true
            }

          */
          const p = { ...parameters, HAS_ALPHA_CHANGED: false, WAS_ALPHA_DEFINED: false }
          const r = Relay.regulate(p)

          expect(r).to.eql({
            SIGNAL: Signals.EXCEPTION,
            SERVICE: '011'
          })
        })
      })

      describe('With fields `HAS_ALPHA_CHANGED` as false and `WAS_ALPHA_DEFINED` as false and `WAS_OMEGA_DEFINED` as false', () => {
        it('returns an object with `SIGNAL` as `EXCEPTION` and `SERVICE` as `012`', () => {
          /*

            {
              HAS_ALPHA: true,
              HAS_OMEGA: true,
              HAS_ALPHA_CHANGED: false,
              HAS_OMEGA_CHANGED: true,
              WAS_ALPHA_DEFINED: false,
              WAS_OMEGA_DEFINED: false
            }

          */
          const p = { ...parameters, HAS_ALPHA_CHANGED: false, WAS_ALPHA_DEFINED: false, WAS_OMEGA_DEFINED: false }
          const r = Relay.regulate(p)

          expect(r).to.eql({
            SIGNAL: Signals.EXCEPTION,
            SERVICE: '012'
          })
        })
      })

      describe('With fields `HAS_ALPHA_CHANGED` as false and `HAS_OMEGA_CHANGED` as false', () => {
        it('returns an object with `SIGNAL` as `REMAIN_ALPHA_REMAIN_OMEGA` and `SERVICE` as `013`', () => {
          /*

            {
              HAS_ALPHA: true,
              HAS_OMEGA: true,
              HAS_ALPHA_CHANGED: false,
              HAS_OMEGA_CHANGED: false,
              WAS_ALPHA_DEFINED: true,
              WAS_OMEGA_DEFINED: true
            }

          */
          const p = { ...parameters, HAS_ALPHA_CHANGED: false, HAS_OMEGA_CHANGED: false }
          const r = Relay.regulate(p)

          expect(r).to.eql({
            SIGNAL: Signals.REMAIN_ALPHA_REMAIN_OMEGA,
            SERVICE: '013'
          })
        })
      })

      describe('With fields `HAS_ALPHA_CHANGED` as false and `HAS_OMEGA_CHANGED` as false and `WAS_OMEGA_DEFINED` as false', () => {
        it('returns an object with `SIGNAL` as `EXCEPTION` and `SERVICE` as `014`', () => {
          /*

            {
              HAS_ALPHA: true,
              HAS_OMEGA: true,
              HAS_ALPHA_CHANGED: false,
              HAS_OMEGA_CHANGED: false,
              WAS_ALPHA_DEFINED: true,
              WAS_OMEGA_DEFINED: false
            }

          */
          const p = { ...parameters, HAS_ALPHA_CHANGED: false, HAS_OMEGA_CHANGED: false, WAS_OMEGA_DEFINED: false }
          const r = Relay.regulate(p)

          expect(r).to.eql({
            SIGNAL: Signals.EXCEPTION,
            SERVICE: '014'
          })
        })
      })

      describe('With fields `HAS_ALPHA_CHANGED` as false and `HAS_OMEGA_CHANGED` as false and `WAS_ALPHA_DEFINED` as false', () => {
        it('returns an object with `SIGNAL` as `EXCEPTION` and `SERVICE` as `015`', () => {
          /*

            {
              HAS_ALPHA: true,
              HAS_OMEGA: true,
              HAS_ALPHA_CHANGED: false,
              HAS_OMEGA_CHANGED: false,
              WAS_ALPHA_DEFINED: false,
              WAS_OMEGA_DEFINED: true
            }

          */
          const p = { ...parameters, HAS_ALPHA_CHANGED: false, HAS_OMEGA_CHANGED: false, WAS_ALPHA_DEFINED: false }
          const r = Relay.regulate(p)

          expect(r).to.eql({
            SIGNAL: Signals.EXCEPTION,
            SERVICE: '015'
          })
        })
      })

      describe('With fields `HAS_ALPHA_CHANGED` as false and `HAS_OMEGA_CHANGED` as false and `WAS_ALPHA_DEFINED` as false and `WAS_OMEGA_DEFINED` as false', () => {
        it('returns an object with `SIGNAL` as `EXCEPTION` and `SERVICE` as `016`', () => {
          /*

            {
              HAS_ALPHA: true,
              HAS_OMEGA: true,
              HAS_ALPHA_CHANGED: false,
              HAS_OMEGA_CHANGED: false,
              WAS_ALPHA_DEFINED: false,
              WAS_OMEGA_DEFINED: false
            }

          */
          const p = { ...parameters, HAS_ALPHA_CHANGED: false, HAS_OMEGA_CHANGED: false, WAS_ALPHA_DEFINED: false, WAS_OMEGA_DEFINED: false }
          const r = Relay.regulate(p)

          expect(r).to.eql({
            SIGNAL: Signals.EXCEPTION,
            SERVICE: '016'
          })
        })
      })

      describe('With fields `HAS_OMEGA` as false', () => {
        it('returns an object with `SIGNAL` as `CHANGE_ALPHA_LEAVE_OMEGA` and `SERVICE` as `017`', () => {
          /*

            {
              HAS_ALPHA: true,
              HAS_OMEGA: false,
              HAS_ALPHA_CHANGED: true,
              HAS_OMEGA_CHANGED: true,
              WAS_ALPHA_DEFINED: true,
              WAS_OMEGA_DEFINED: true
            }

          */
          const p = { ...parameters, HAS_OMEGA: false }
          const r = Relay.regulate(p)

          expect(r).to.eql({
            SIGNAL: Signals.CHANGE_ALPHA_LEAVE_OMEGA,
            SERVICE: '017'
          })
        })
      })

      describe('With fields `HAS_OMEGA` as false and `WAS_OMEGA_DEFINED` as false', () => {
        it('returns an object with `SIGNAL` as `EXCEPTION` and `SERVICE` as `018`', () => {
          /*

            {
              HAS_ALPHA: true,
              HAS_OMEGA: false,
              HAS_ALPHA_CHANGED: true,
              HAS_OMEGA_CHANGED: true,
              WAS_ALPHA_DEFINED: true,
              WAS_OMEGA_DEFINED: false
            }

          */
          const p = { ...parameters, HAS_OMEGA: false, WAS_OMEGA_DEFINED: false }
          const r = Relay.regulate(p)

          expect(r).to.eql({
            SIGNAL: Signals.EXCEPTION,
            SERVICE: '018'
          })
        })
      })

      describe('With fields `HAS_OMEGA` as false and `WAS_ALPHA_DEFINED` as false', () => {
        it('returns an object with `SIGNAL` as `CHANGE_ALPHA_LEAVE_OMEGA` and `SERVICE` as `019`', () => {
          /*

            {
              HAS_ALPHA: true,
              HAS_OMEGA: false,
              HAS_ALPHA_CHANGED: true,
              HAS_OMEGA_CHANGED: true,
              WAS_ALPHA_DEFINED: false,
              WAS_OMEGA_DEFINED: true
            }

          */
          const p = { ...parameters, HAS_OMEGA: false, WAS_ALPHA_DEFINED: false }
          const r = Relay.regulate(p)

          expect(r).to.eql({
            SIGNAL: Signals.EXCEPTION,
            SERVICE: '019'
          })
        })
      })

      describe('With fields `HAS_OMEGA` as false and `WAS_ALPHA_DEFINED` as false and `WAS_OMEGA_DEFINED` as false', () => {
        it('returns an object with `SIGNAL` as `EXCEPTION` and `SERVICE` as `020`', () => {
          /*

            {
              HAS_ALPHA: true,
              HAS_OMEGA: false,
              HAS_ALPHA_CHANGED: true,
              HAS_OMEGA_CHANGED: true,
              WAS_ALPHA_DEFINED: false,
              WAS_OMEGA_DEFINED: false
            }

          */
          const p = { ...parameters, HAS_OMEGA: false, WAS_ALPHA_DEFINED: false, WAS_OMEGA_DEFINED: false }
          const r = Relay.regulate(p)

          expect(r).to.eql({
            SIGNAL: Signals.EXCEPTION,
            SERVICE: '020'
          })
        })
      })

      describe('With fields `HAS_OMEGA` as false and `HAS_OMEGA_CHANGED` as false and `WAS_OMEGA_DEFINED` as true', () => {
        it('returns an object with `SIGNAL` as `EXCEPTION` and `SERVICE` as `021`', () => {
          /*

            {
              HAS_ALPHA: true,
              HAS_OMEGA: false,
              HAS_ALPHA_CHANGED: true,
              HAS_OMEGA_CHANGED: false,
              WAS_ALPHA_DEFINED: true,
              WAS_OMEGA_DEFINED: true
            }

          */
          const p = { ...parameters, HAS_OMEGA: false, HAS_OMEGA_CHANGED: false }
          const r = Relay.regulate(p)

          expect(r).to.eql({
            SIGNAL: Signals.EXCEPTION,
            SERVICE: '021'
          })
        })
      })

      describe('With fields `HAS_OMEGA` as false and `HAS_OMEGA_CHANGED` as false and `WAS_OMEGA_DEFINED` as false', () => {
        it('returns an object with `SIGNAL` as `CHANGE_ALPHA` and `SERVICE` as `022`', () => {
          /*

            {
              HAS_ALPHA: true,
              HAS_OMEGA: false,
              HAS_ALPHA_CHANGED: true,
              HAS_OMEGA_CHANGED: false,
              WAS_ALPHA_DEFINED: true,
              WAS_OMEGA_DEFINED: false
            }

          */
          const p = { ...parameters, HAS_OMEGA: false, HAS_OMEGA_CHANGED: false, WAS_OMEGA_DEFINED: false }
          const r = Relay.regulate(p)

          expect(r).to.eql({
            SIGNAL: Signals.CHANGE_ALPHA,
            SERVICE: '022'
          })
        })
      })

      describe('With fields `HAS_OMEGA` as false and `HAS_OMEGA_CHANGED` as false and `WAS_ALPHA_DEFINED` as false', () => {
        it('returns an object with `SIGNAL` as `EXCEPTION` and `SERVICE` as `023`', () => {
          /*

            {
              HAS_ALPHA: true,
              HAS_OMEGA: false,
              HAS_ALPHA_CHANGED: true,
              HAS_OMEGA_CHANGED: false,
              WAS_ALPHA_DEFINED: false,
              WAS_OMEGA_DEFINED: true
            }

          */
          const p = { ...parameters, HAS_OMEGA: false, HAS_OMEGA_CHANGED: false, WAS_ALPHA_DEFINED: false }
          const r = Relay.regulate(p)

          expect(r).to.eql({
            SIGNAL: Signals.EXCEPTION,
            SERVICE: '023'
          })
        })
      })

      describe('With fields `HAS_OMEGA` as false and `HAS_OMEGA_CHANGED` as false and `WAS_ALPHA_DEFINED` as false and `WAS_OMEGA_DEFINED` as false', () => {
        it('returns an object with `SIGNAL` as `ENTER_ALPHA` and `SERVICE` as `024`', () => {
          /*

            {
              HAS_ALPHA: true,
              HAS_OMEGA: false,
              HAS_ALPHA_CHANGED: true,
              HAS_OMEGA_CHANGED: false,
              WAS_ALPHA_DEFINED: false,
              WAS_OMEGA_DEFINED: false
            }

          */
          const p = { ...parameters, HAS_OMEGA: false, HAS_OMEGA_CHANGED: false, WAS_ALPHA_DEFINED: false, WAS_OMEGA_DEFINED: false }
          const r = Relay.regulate(p)

          expect(r).to.eql({
            SIGNAL: Signals.ENTER_ALPHA,
            SERVICE: '024'
          })
        })
      })

      describe('With fields `HAS_OMEGA` as false and `HAS_ALPHA_CHANGED` as false', () => {
        it('returns an object with `SIGNAL` as `REMAIN_ALPHA_LEAVE_OMEGA` and `SERVICE` as `025`', () => {
          /*

            {
              HAS_ALPHA: true,
              HAS_OMEGA: false,
              HAS_ALPHA_CHANGED: false,
              HAS_OMEGA_CHANGED: true,
              WAS_ALPHA_DEFINED: true,
              WAS_OMEGA_DEFINED: true
            }

          */
          const p = { ...parameters, HAS_OMEGA: false, HAS_ALPHA_CHANGED: false }
          const r = Relay.regulate(p)

          expect(r).to.eql({
            SIGNAL: Signals.REMAIN_ALPHA_LEAVE_OMEGA,
            SERVICE: '025'
          })
        })
      })

      describe('With fields `HAS_OMEGA` as false and `HAS_ALPHA_CHANGED` as false and `WAS_OMEGA_DEFINED` as false', () => {
        it('returns an object with `SIGNAL` as `EXCEPTION` and `SERVICE` as `026`', () => {
          /*

            {
              HAS_ALPHA: true,
              HAS_OMEGA: false,
              HAS_ALPHA_CHANGED: false,
              HAS_OMEGA_CHANGED: true,
              WAS_ALPHA_DEFINED: true,
              WAS_OMEGA_DEFINED: false
            }

          */
          const p = { ...parameters, HAS_OMEGA: false, HAS_ALPHA_CHANGED: false, WAS_OMEGA_DEFINED: false }
          const r = Relay.regulate(p)

          expect(r).to.eql({
            SIGNAL: Signals.EXCEPTION,
            SERVICE: '026'
          })
        })
      })

      describe('With fields `HAS_OMEGA` as false and `HAS_ALPHA_CHANGED` as false and `WAS_ALPHA_DEFINED` as false', () => {
        it('returns an object with `SIGNAL` as `EXCEPTION` and `SERVICE` as `027`', () => {
          /*

            {
              HAS_ALPHA: true,
              HAS_OMEGA: false,
              HAS_ALPHA_CHANGED: false,
              HAS_OMEGA_CHANGED: true,
              WAS_ALPHA_DEFINED: false,
              WAS_OMEGA_DEFINED: true
            }

          */
          const p = { ...parameters, HAS_OMEGA: false, HAS_ALPHA_CHANGED: false, WAS_ALPHA_DEFINED: false }
          const r = Relay.regulate(p)

          expect(r).to.eql({
            SIGNAL: Signals.EXCEPTION,
            SERVICE: '027'
          })
        })
      })

      describe('With fields `HAS_OMEGA` as false and `HAS_ALPHA_CHANGED` as false and `WAS_ALPHA_DEFINED` as false and `WAS_OMEGA_DEFINED` as false', () => {
        it('returns an object with `SIGNAL` as `EXCEPTION` and `SERVICE` as `028`', () => {
          /*

            {
              HAS_ALPHA: true,
              HAS_OMEGA: false,
              HAS_ALPHA_CHANGED: false,
              HAS_OMEGA_CHANGED: true,
              WAS_ALPHA_DEFINED: false,
              WAS_OMEGA_DEFINED: false
            }

          */
          const p = { ...parameters, HAS_OMEGA: false, HAS_ALPHA_CHANGED: false, WAS_ALPHA_DEFINED: false, WAS_OMEGA_DEFINED: false }
          const r = Relay.regulate(p)

          expect(r).to.eql({
            SIGNAL: Signals.EXCEPTION,
            SERVICE: '028'
          })
        })
      })

      describe('With fields `HAS_OMEGA` as false and `HAS_ALPHA_CHANGED` as false and `HAS_OMEGA_CHANGED` as false', () => {
        it('returns an object with `SIGNAL` as `EXCEPTION` and `SERVICE` as `029`', () => {
          /*

            {
              HAS_ALPHA: true,
              HAS_OMEGA: false,
              HAS_ALPHA_CHANGED: false,
              HAS_OMEGA_CHANGED: false,
              WAS_ALPHA_DEFINED: true,
              WAS_OMEGA_DEFINED: true
            }

          */
          const p = { ...parameters, HAS_OMEGA: false, HAS_ALPHA_CHANGED: false, HAS_OMEGA_CHANGED: false }
          const r = Relay.regulate(p)

          expect(r).to.eql({
            SIGNAL: Signals.EXCEPTION,
            SERVICE: '029'
          })
        })
      })

      describe('With fields `HAS_OMEGA` as false and `HAS_ALPHA_CHANGED` as false and `HAS_OMEGA_CHANGED` as false and `WAS_OMEGA_DEFINED` as false', () => {
        it('returns an object with `SIGNAL` as `EXCEPTION` and `SERVICE` as `030`', () => {
          /*

            {
              HAS_ALPHA: true,
              HAS_OMEGA: false,
              HAS_ALPHA_CHANGED: false,
              HAS_OMEGA_CHANGED: false,
              WAS_ALPHA_DEFINED: true,
              WAS_OMEGA_DEFINED: false
            }

          */
          const p = { ...parameters, HAS_OMEGA: false, HAS_ALPHA_CHANGED: false, HAS_OMEGA_CHANGED: false, WAS_OMEGA_DEFINED: false }
          const r = Relay.regulate(p)

          expect(r).to.eql({
            SIGNAL: Signals.REMAIN_ALPHA,
            SERVICE: '030'
          })
        })
      })

      describe('With fields `HAS_OMEGA` as false and `HAS_ALPHA_CHANGED` as false and `HAS_OMEGA_CHANGED` as false and `WAS_ALPHA_DEFINED` as false', () => {
        it('returns an object with `SIGNAL` as `EXCEPTION` and `SERVICE` as `031`', () => {
          /*

            {
              HAS_ALPHA: true,
              HAS_OMEGA: false,
              HAS_ALPHA_CHANGED: false,
              HAS_OMEGA_CHANGED: false,
              WAS_ALPHA_DEFINED: false,
              WAS_OMEGA_DEFINED: true
            }

          */
          const p = { ...parameters, HAS_OMEGA: false, HAS_ALPHA_CHANGED: false, HAS_OMEGA_CHANGED: false, WAS_ALPHA_DEFINED: false }
          const r = Relay.regulate(p)

          expect(r).to.eql({
            SIGNAL: Signals.EXCEPTION,
            SERVICE: '031'
          })
        })
      })

      describe('With fields `HAS_OMEGA` as false and `HAS_ALPHA_CHANGED` as false and `HAS_OMEGA_CHANGED` as false and `WAS_ALPHA_DEFINED` as false and `WAS_OMEGA_DEFINED` as false', () => {
        it('returns an object with `SIGNAL` as `EXCEPTION` and `SERVICE` as `032`', () => {
          /*

            {
              HAS_ALPHA: true,
              HAS_OMEGA: false,
              HAS_ALPHA_CHANGED: false,
              HAS_OMEGA_CHANGED: false,
              WAS_ALPHA_DEFINED: false,
              WAS_OMEGA_DEFINED: false
            }

          */
          const p = { ...parameters, HAS_OMEGA: false, HAS_ALPHA_CHANGED: false, HAS_OMEGA_CHANGED: false, WAS_ALPHA_DEFINED: false, WAS_OMEGA_DEFINED: false }
          const r = Relay.regulate(p)

          expect(r).to.eql({
            SIGNAL: Signals.EXCEPTION,
            SERVICE: '032'
          })
        })
      })

      describe('With fields `HAS_ALPHA` is false', () => {
        it('returns an object with `SIGNAL` as `EXCEPTION` and `SERVICE` as `033`', () => {
          /*

            {
              HAS_ALPHA: false,
              HAS_OMEGA: true,
              HAS_ALPHA_CHANGED: true,
              HAS_OMEGA_CHANGED: true,
              WAS_ALPHA_DEFINED: true,
              WAS_OMEGA_DEFINED: true
            }

          */
          const p = { ...parameters, HAS_ALPHA: false }
          const r = Relay.regulate(p)

          expect(r).to.eql({
            SIGNAL: Signals.EXCEPTION,
            SERVICE: '033'
          })
        })
      })

      describe('With fields `HAS_ALPHA` as false and `WAS_OMEGA_DEFINED` is false', () => {
        it('returns an object with `SIGNAL` as `EXCEPTION` and `SERVICE` as `034`', () => {
          /*

            {
              HAS_ALPHA: false,
              HAS_OMEGA: true,
              HAS_ALPHA_CHANGED: true,
              HAS_OMEGA_CHANGED: true,
              WAS_ALPHA_DEFINED: true,
              WAS_OMEGA_DEFINED: false
            }

          */
          const p = { ...parameters, HAS_ALPHA: false, WAS_OMEGA_DEFINED: false }
          const r = Relay.regulate(p)

          expect(r).to.eql({
            SIGNAL: Signals.EXCEPTION,
            SERVICE: '034'
          })
        })
      })

      describe('With fields `HAS_ALPHA` as false and `WAS_ALPHA_DEFINED` as false', () => {
        it('returns an object with `SIGNAL` as `EXCEPTION` and `SERVICE` as `035`', () => {
          /*

            {
              HAS_ALPHA: false,
              HAS_OMEGA: true,
              HAS_ALPHA_CHANGED: true,
              HAS_OMEGA_CHANGED: true,
              WAS_ALPHA_DEFINED: false,
              WAS_OMEGA_DEFINED: true
            }

          */
          const p = { ...parameters, HAS_ALPHA: false, WAS_ALPHA_DEFINED: false }
          const r = Relay.regulate(p)

          expect(r).to.eql({
            SIGNAL: Signals.EXCEPTION,
            SERVICE: '035'
          })
        })
      })

      describe('With fields `HAS_ALPHA` as false and `WAS_ALPHA_DEFINED` as false and `WAS_OMEGA_DEFINED` as false', () => {
        it('returns an object with `SIGNAL` as `EXCEPTION` and `SERVICE` as `036`', () => {
          /*

            {
              HAS_ALPHA: false,
              HAS_OMEGA: true,
              HAS_ALPHA_CHANGED: true,
              HAS_OMEGA_CHANGED: true,
              WAS_ALPHA_DEFINED: false,
              WAS_OMEGA_DEFINED: false
            }

          */
          const p = { ...parameters, HAS_ALPHA: false, WAS_ALPHA_DEFINED: false, WAS_OMEGA_DEFINED: false }
          const r = Relay.regulate(p)

          expect(r).to.eql({
            SIGNAL: Signals.EXCEPTION,
            SERVICE: '036'
          })
        })
      })

      describe('With fields `HAS_ALPHA` as false and `HAS_OMEGA_CHANGED` as false', () => {
        it('returns an object with `SIGNAL` as `EXCEPTION` and `SERVICE` as `037`', () => {
          /*

            {
              HAS_ALPHA: false,
              HAS_OMEGA: true,
              HAS_ALPHA_CHANGED: true,
              HAS_OMEGA_CHANGED: false,
              WAS_ALPHA_DEFINED: true,
              WAS_OMEGA_DEFINED: true
            }

          */
          const p = { ...parameters, HAS_ALPHA: false, HAS_OMEGA_CHANGED: false }
          const r = Relay.regulate(p)

          expect(r).to.eql({
            SIGNAL: Signals.EXCEPTION,
            SERVICE: '037'
          })
        })
      })

      describe('With fields `HAS_ALPHA` as false and `HAS_OMEGA_CHANGED` as false and `WAS_OMEGA_DEFINED` as false', () => {
        it('returns an object with `SIGNAL` as `EXCEPTION` and `SERVICE` as `038`', () => {
          /*

            {
              HAS_ALPHA: false,
              HAS_OMEGA: true,
              HAS_ALPHA_CHANGED: true,
              HAS_OMEGA_CHANGED: false,
              WAS_ALPHA_DEFINED: true,
              WAS_OMEGA_DEFINED: false
            }

          */
          const p = { ...parameters, HAS_ALPHA: false, HAS_OMEGA_CHANGED: false, WAS_OMEGA_DEFINED: false }
          const r = Relay.regulate(p)

          expect(r).to.eql({
            SIGNAL: Signals.EXCEPTION,
            SERVICE: '038'
          })
        })
      })

      describe('With fields `HAS_ALPHA` as false and `HAS_OMEGA_CHANGED` as false and `WAS_ALPHA_DEFINED` as false', () => {
        it('returns an object with `SIGNAL` as `EXCEPTION` and `SERVICE` as `039`', () => {
          /*

            {
              HAS_ALPHA: false,
              HAS_OMEGA: true,
              HAS_ALPHA_CHANGED: true,
              HAS_OMEGA_CHANGED: false,
              WAS_ALPHA_DEFINED: false,
              WAS_OMEGA_DEFINED: true
            }

          */
          const p = { ...parameters, HAS_ALPHA: false, HAS_OMEGA_CHANGED: false, WAS_ALPHA_DEFINED: false }
          const r = Relay.regulate(p)

          expect(r).to.eql({
            SIGNAL: Signals.EXCEPTION,
            SERVICE: '039'
          })
        })
      })

      describe('With fields `HAS_ALPHA` as false and `HAS_OMEGA_CHANGED` as false and `WAS_ALPHA_DEFINED` as false and `WAS_OMEGA_DEFINED` as false', () => {
        it('returns an object with `SIGNAL` as `EXCEPTION` and `SERVICE` as `040`', () => {
          /*

            {
              HAS_ALPHA: false,
              HAS_OMEGA: true,
              HAS_ALPHA_CHANGED: true,
              HAS_OMEGA_CHANGED: false,
              WAS_ALPHA_DEFINED: false,
              WAS_OMEGA_DEFINED: false
            }

          */
          const p = { ...parameters, HAS_ALPHA: false, HAS_OMEGA_CHANGED: false, WAS_ALPHA_DEFINED: false, WAS_OMEGA_DEFINED: false }
          const r = Relay.regulate(p)

          expect(r).to.eql({
            SIGNAL: Signals.EXCEPTION,
            SERVICE: '040'
          })
        })
      })

      describe('With fields `HAS_ALPHA` as false and `HAS_ALPHA_CHANGED` as false', () => {
        it('returns an object with `SIGNAL` as `EXCEPTION` and `SERVICE` as `041`', () => {
          /*

            {
              HAS_ALPHA: false,
              HAS_OMEGA: true,
              HAS_ALPHA_CHANGED: false,
              HAS_OMEGA_CHANGED: true,
              WAS_ALPHA_DEFINED: true,
              WAS_OMEGA_DEFINED: true
            }

          */
          const p = { ...parameters, HAS_ALPHA: false, HAS_ALPHA_CHANGED: false }
          const r = Relay.regulate(p)

          expect(r).to.eql({
            SIGNAL: Signals.EXCEPTION,
            SERVICE: '041'
          })
        })
      })

      describe('With fields `HAS_ALPHA` as false and `HAS_ALPHA_CHANGED` as false and `WAS_OMEGA_DEFINED` as false', () => {
        it('returns an object with `SIGNAL` as `EXCEPTION` and `SERVICE` as `042`', () => {
          /*

            {
              HAS_ALPHA: false,
              HAS_OMEGA: true,
              HAS_ALPHA_CHANGED: false,
              HAS_OMEGA_CHANGED: true,
              WAS_ALPHA_DEFINED: true,
              WAS_OMEGA_DEFINED: false
            }

          */
          const p = { ...parameters, HAS_ALPHA: false, HAS_ALPHA_CHANGED: false, WAS_OMEGA_DEFINED: false }
          const r = Relay.regulate(p)

          expect(r).to.eql({
            SIGNAL: Signals.EXCEPTION,
            SERVICE: '042'
          })
        })
      })

      describe('With fields `HAS_ALPHA` as false and `HAS_ALPHA_CHANGED` as false and `WAS_ALPHA_DEFINED` as false', () => {
        it('returns an object with `SIGNAL` as `EXCEPTION` and `SERVICE` as `043`', () => {
          /*

            {
              HAS_ALPHA: false,
              HAS_OMEGA: true,
              HAS_ALPHA_CHANGED: false,
              HAS_OMEGA_CHANGED: true,
              WAS_ALPHA_DEFINED: false,
              WAS_OMEGA_DEFINED: true
            }

          */
          const p = { ...parameters, HAS_ALPHA: false, HAS_ALPHA_CHANGED: false, WAS_ALPHA_DEFINED: false }
          const r = Relay.regulate(p)

          expect(r).to.eql({
            SIGNAL: Signals.EXCEPTION,
            SERVICE: '043'
          })
        })
      })

      describe('With fields `HAS_ALPHA` as false and `HAS_ALPHA_CHANGED` as false and `WAS_ALPHA_DEFINED` as false and `WAS_OMEGA_DEFINED` as false', () => {
        it('returns an object with `SIGNAL` as `EXCEPTION` and `SERVICE` as `044`', () => {
          /*

            {
              HAS_ALPHA: false,
              HAS_OMEGA: true,
              HAS_ALPHA_CHANGED: false,
              HAS_OMEGA_CHANGED: true,
              WAS_ALPHA_DEFINED: false,
              WAS_OMEGA_DEFINED: false
            }

          */
          const p = { ...parameters, HAS_ALPHA: false, HAS_ALPHA_CHANGED: false, WAS_ALPHA_DEFINED: false, WAS_OMEGA_DEFINED: false }
          const r = Relay.regulate(p)

          expect(r).to.eql({
            SIGNAL: Signals.EXCEPTION,
            SERVICE: '044'
          })
        })
      })

      describe('With fields `HAS_ALPHA` as false and `HAS_ALPHA_CHANGED` as false and `HAS_OMEGA_CHANGED` as false', () => {
        it('returns an object with `SIGNAL` as `EXCEPTION` and `SERVICE` as `045`', () => {
          /*

            {
              HAS_ALPHA: false,
              HAS_OMEGA: true,
              HAS_ALPHA_CHANGED: false,
              HAS_OMEGA_CHANGED: false,
              WAS_ALPHA_DEFINED: true,
              WAS_OMEGA_DEFINED: true
            }

          */
          const p = { ...parameters, HAS_ALPHA: false, HAS_ALPHA_CHANGED: false, HAS_OMEGA_CHANGED: false }
          const r = Relay.regulate(p)

          expect(r).to.eql({
            SIGNAL: Signals.EXCEPTION,
            SERVICE: '045'
          })
        })
      })

      describe('With fields `HAS_ALPHA` as false and `HAS_ALPHA_CHANGED` as false and `HAS_OMEGA_CHANGED` as false and `WAS_OMEGA_DEFINED` as false', () => {
        it('returns an object with `SIGNAL` as `EXCEPTION` and `SERVICE` as `046`', () => {
          /*

            {
              HAS_ALPHA: false,
              HAS_OMEGA: true,
              HAS_ALPHA_CHANGED: false,
              HAS_OMEGA_CHANGED: false,
              WAS_ALPHA_DEFINED: true,
              WAS_OMEGA_DEFINED: false
            }

          */
          const p = { ...parameters, HAS_ALPHA: false, HAS_ALPHA_CHANGED: false, HAS_OMEGA_CHANGED: false, WAS_OMEGA_DEFINED: false }
          const r = Relay.regulate(p)

          expect(r).to.eql({
            SIGNAL: Signals.EXCEPTION,
            SERVICE: '046'
          })
        })
      })

      describe('With fields `HAS_ALPHA` as false and `HAS_ALPHA_CHANGED` as false and `HAS_OMEGA_CHANGED` as false and `WAS_ALPHA_DEFINED` as false', () => {
        it('returns an object with `SIGNAL` as `EXCEPTION` and `SERVICE` as `047`', () => {
          /*

            {
              HAS_ALPHA: false,
              HAS_OMEGA: true,
              HAS_ALPHA_CHANGED: false,
              HAS_OMEGA_CHANGED: false,
              WAS_ALPHA_DEFINED: false,
              WAS_OMEGA_DEFINED: true
            }

          */
          const p = { ...parameters, HAS_ALPHA: false, HAS_ALPHA_CHANGED: false, HAS_OMEGA_CHANGED: false, WAS_ALPHA_DEFINED: false }
          const r = Relay.regulate(p)

          expect(r).to.eql({
            SIGNAL: Signals.EXCEPTION,
            SERVICE: '047'
          })
        })
      })

      describe('With fields `HAS_ALPHA` as false and `HAS_ALPHA_CHANGED` as false and `HAS_OMEGA_CHANGED` as false and `WAS_ALPHA_DEFINED` as false and `WAS_OMEGA_DEFINED` as false', () => {
        it('returns an object with `SIGNAL` as `EXCEPTION` and `SERVICE` as `048`', () => {
          /*

            {
              HAS_ALPHA: false,
              HAS_OMEGA: true,
              HAS_ALPHA_CHANGED: false,
              HAS_OMEGA_CHANGED: false,
              WAS_ALPHA_DEFINED: false,
              WAS_OMEGA_DEFINED: false
            }

          */
          const p = { ...parameters, HAS_ALPHA: false, HAS_ALPHA_CHANGED: false, HAS_OMEGA_CHANGED: false, WAS_ALPHA_DEFINED: false, WAS_OMEGA_DEFINED: false }
          const r = Relay.regulate(p)

          expect(r).to.eql({
            SIGNAL: Signals.EXCEPTION,
            SERVICE: '048'
          })
        })
      })

      describe('With fields `HAS_ALPHA` as false and `HAS_OMEGA` as false', () => {
        it('returns an object with `SIGNAL` as `LEAVE_ALPHA_LEAVE_OMEGA` and `SERVICE` as `049`', () => {
          /*

            {
              HAS_ALPHA: false,
              HAS_OMEGA: false,
              HAS_ALPHA_CHANGED: true,
              HAS_OMEGA_CHANGED: true,
              WAS_ALPHA_DEFINED: true,
              WAS_OMEGA_DEFINED: true
            }

          */
          const p = { ...parameters, HAS_ALPHA: false, HAS_OMEGA: false }
          const r = Relay.regulate(p)

          expect(r).to.eql({
            SIGNAL: Signals.LEAVE_ALPHA_LEAVE_OMEGA,
            SERVICE: '049'
          })
        })
      })

      describe('With fields `HAS_ALPHA` as false and `HAS_OMEGA` as false and `WAS_OMEGA_DEFINED` as false', () => {
        it('returns an object with `SIGNAL` as `EXCEPTION` and `SERVICE` as `050`', () => {
          /*

            {
              HAS_ALPHA: false,
              HAS_OMEGA: false,
              HAS_ALPHA_CHANGED: true,
              HAS_OMEGA_CHANGED: true,
              WAS_ALPHA_DEFINED: true,
              WAS_OMEGA_DEFINED: false
            }

          */
          const p = { ...parameters, HAS_ALPHA: false, HAS_OMEGA: false, WAS_OMEGA_DEFINED: false }
          const r = Relay.regulate(p)

          expect(r).to.eql({
            SIGNAL: Signals.EXCEPTION,
            SERVICE: '050'
          })
        })
      })

      describe('With fields `HAS_ALPHA` as false and `HAS_OMEGA` as false and `WAS_ALPHA_DEFINED` as false', () => {
        it('returns an object with `SIGNAL` as `EXCEPTION` and `SERVICE` as `051`', () => {
          /*

            {
              HAS_ALPHA: false,
              HAS_OMEGA: false,
              HAS_ALPHA_CHANGED: true,
              HAS_OMEGA_CHANGED: true,
              WAS_ALPHA_DEFINED: false,
              WAS_OMEGA_DEFINED: true
            }

          */
          const p = { ...parameters, HAS_ALPHA: false, HAS_OMEGA: false, WAS_ALPHA_DEFINED: false }
          const r = Relay.regulate(p)

          expect(r).to.eql({
            SIGNAL: Signals.EXCEPTION,
            SERVICE: '051'
          })
        })
      })

      describe('With fields `HAS_ALPHA` as false and `HAS_OMEGA` as false and `WAS_ALPHA_DEFINED` as false and `WAS_OMEGA_DEFINED` as false', () => {
        it('returns an object with `SIGNAL` as `EXCEPTION` and `SERVICE` as `052`', () => {
          /*

            {
              HAS_ALPHA: false,
              HAS_OMEGA: false,
              HAS_ALPHA_CHANGED: true,
              HAS_OMEGA_CHANGED: true,
              WAS_ALPHA_DEFINED: false,
              WAS_OMEGA_DEFINED: false
            }

          */
          const p = { ...parameters, HAS_ALPHA: false, HAS_OMEGA: false, WAS_ALPHA_DEFINED: false, WAS_OMEGA_DEFINED: false }
          const r = Relay.regulate(p)

          expect(r).to.eql({
            SIGNAL: Signals.EXCEPTION,
            SERVICE: '052'
          })
        })
      })

      describe('With fields `HAS_ALPHA` as false and `HAS_OMEGA` as false and `HAS_OMEGA_CHANGED` as false', () => {
        it('returns an object with `SIGNAL` as `EXCEPTION` and `SERVICE` as `053`', () => {
          /*

            {
              HAS_ALPHA: false,
              HAS_OMEGA: false,
              HAS_ALPHA_CHANGED: true,
              HAS_OMEGA_CHANGED: false,
              WAS_ALPHA_DEFINED: true,
              WAS_OMEGA_DEFINED: true
            }

          */
          const p = { ...parameters, HAS_ALPHA: false, HAS_OMEGA: false, HAS_OMEGA_CHANGED: false }
          const r = Relay.regulate(p)

          expect(r).to.eql({
            SIGNAL: Signals.EXCEPTION,
            SERVICE: '053'
          })
        })
      })

      describe('With fields `HAS_ALPHA` as false and `HAS_OMEGA` as false and `HAS_OMEGA_CHANGED` as false and `WAS_OMEGA_DEFINED` as false', () => {
        it('returns an object with `SIGNAL` as `LEAVE_ALPHA` and `SERVICE` as `054`', () => {
          /*

            {
              HAS_ALPHA: false,
              HAS_OMEGA: false,
              HAS_ALPHA_CHANGED: true,
              HAS_OMEGA_CHANGED: false,
              WAS_ALPHA_DEFINED: true,
              WAS_OMEGA_DEFINED: false
            }

          */
          const p = { ...parameters, HAS_ALPHA: false, HAS_OMEGA: false, HAS_OMEGA_CHANGED: false, WAS_OMEGA_DEFINED: false }
          const r = Relay.regulate(p)

          expect(r).to.eql({
            SIGNAL: Signals.LEAVE_ALPHA,
            SERVICE: '054'
          })
        })
      })

      describe('With fields `HAS_ALPHA` as false and `HAS_OMEGA` as false and `HAS_OMEGA_CHANGED` as false and `WAS_ALPHA_DEFINED` as false', () => {
        it('returns an object with `SIGNAL` as `EXCEPTION` and `SERVICE` as `055`', () => {
          /*

            {
              HAS_ALPHA: false,
              HAS_OMEGA: false,
              HAS_ALPHA_CHANGED: true,
              HAS_OMEGA_CHANGED: false,
              WAS_ALPHA_DEFINED: false,
              WAS_OMEGA_DEFINED: true
            }

          */
          const p = { ...parameters, HAS_ALPHA: false, HAS_OMEGA: false, HAS_OMEGA_CHANGED: false, WAS_ALPHA_DEFINED: false }
          const r = Relay.regulate(p)

          expect(r).to.eql({
            SIGNAL: Signals.EXCEPTION,
            SERVICE: '055'
          })
        })
      })

      describe('With fields `HAS_ALPHA` as false and `HAS_OMEGA` as false and `HAS_OMEGA_CHANGED` as false and `WAS_ALPHA_DEFINED` as false and `WAS_OMEGA_DEFINED` as false', () => {
        it('returns an object with `SIGNAL` as `EXCEPTION` and `SERVICE` as `056`', () => {
          /*

            {
              HAS_ALPHA: false,
              HAS_OMEGA: false,
              HAS_ALPHA_CHANGED: true,
              HAS_OMEGA_CHANGED: false,
              WAS_ALPHA_DEFINED: false,
              WAS_OMEGA_DEFINED: false
            }

          */
          const p = { ...parameters, HAS_ALPHA: false, HAS_OMEGA: false, HAS_OMEGA_CHANGED: false, WAS_ALPHA_DEFINED: false, WAS_OMEGA_DEFINED: false }
          const r = Relay.regulate(p)

          expect(r).to.eql({
            SIGNAL: Signals.EXCEPTION,
            SERVICE: '056'
          })
        })
      })

      describe('With fields `HAS_ALPHA` as false and `HAS_OMEGA` as false and `HAS_ALPHA_CHANGED` as false', () => {
        it('returns an object with `SIGNAL` as `EXCEPTION` and `SERVICE` as `057`', () => {
          /*

            {
              HAS_ALPHA: false,
              HAS_OMEGA: false,
              HAS_ALPHA_CHANGED: false,
              HAS_OMEGA_CHANGED: true,
              WAS_ALPHA_DEFINED: true,
              WAS_OMEGA_DEFINED: true
            }

          */
          const p = { ...parameters, HAS_ALPHA: false, HAS_OMEGA: false, HAS_ALPHA_CHANGED: false }
          const r = Relay.regulate(p)

          expect(r).to.eql({
            SIGNAL: Signals.EXCEPTION,
            SERVICE: '057'
          })
        })
      })

      describe('With fields `HAS_ALPHA` as false and `HAS_OMEGA` as false and `HAS_ALPHA_CHANGED` as false and `WAS_OMEGA_DEFINED` as false', () => {
        it('returns an object with `SIGNAL` as `EXCEPTION` and `SERVICE` as `058`', () => {
          /*

            {
              HAS_ALPHA: false,
              HAS_OMEGA: false,
              HAS_ALPHA_CHANGED: false,
              HAS_OMEGA_CHANGED: true,
              WAS_ALPHA_DEFINED: true,
              WAS_OMEGA_DEFINED: false
            }

          */
          const p = { ...parameters, HAS_ALPHA: false, HAS_OMEGA: false, HAS_ALPHA_CHANGED: false, WAS_OMEGA_DEFINED: false }
          const r = Relay.regulate(p)

          expect(r).to.eql({
            SIGNAL: Signals.EXCEPTION,
            SERVICE: '058'
          })
        })
      })

      describe('With fields `HAS_ALPHA` as false and `HAS_OMEGA` as false and `HAS_ALPHA_CHANGED` as false and `WAS_ALPHA_DEFINED` as false', () => {
        it('returns an object with `SIGNAL` as `EXCEPTION` and `SERVICE` as `059`', () => {
          /*

            {
              HAS_ALPHA: false,
              HAS_OMEGA: false,
              HAS_ALPHA_CHANGED: false,
              HAS_OMEGA_CHANGED: true,
              WAS_ALPHA_DEFINED: false,
              WAS_OMEGA_DEFINED: true
            }

          */
          const p = { ...parameters, HAS_ALPHA: false, HAS_OMEGA: false, HAS_ALPHA_CHANGED: false, WAS_ALPHA_DEFINED: false }
          const r = Relay.regulate(p)

          expect(r).to.eql({
            SIGNAL: Signals.EXCEPTION,
            SERVICE: '059'
          })
        })
      })

      describe('With fields `HAS_ALPHA` as false and `HAS_OMEGA` as false and `HAS_ALPHA_CHANGED` as false and `WAS_ALPHA_DEFINED` as false and `WAS_OMEGA_DEFINED` as false', () => {
        it('returns an object with `SIGNAL` as `EXCEPTION` and `SERVICE` as `060`', () => {
          /*

            {
              HAS_ALPHA: false,
              HAS_OMEGA: false,
              HAS_ALPHA_CHANGED: false,
              HAS_OMEGA_CHANGED: true,
              WAS_ALPHA_DEFINED: false,
              WAS_OMEGA_DEFINED: false
            }

          */
          const p = { ...parameters, HAS_ALPHA: false, HAS_OMEGA: false, HAS_ALPHA_CHANGED: false, WAS_ALPHA_DEFINED: false, WAS_OMEGA_DEFINED: false }
          const r = Relay.regulate(p)

          expect(r).to.eql({
            SIGNAL: Signals.EXCEPTION,
            SERVICE: '060'
          })
        })
      })

      describe('With fields `HAS_ALPHA` as false and `HAS_OMEGA` as false and `HAS_ALPHA_CHANGED` as false and `HAS_OMEGA_CHANGED` as false', () => {
        it('returns an object with `SIGNAL` as `EXCEPTION` and `SERVICE` as `061`', () => {
          /*

            {
              HAS_ALPHA: false,
              HAS_OMEGA: false,
              HAS_ALPHA_CHANGED: false,
              HAS_OMEGA_CHANGED: false,
              WAS_ALPHA_DEFINED: true,
              WAS_OMEGA_DEFINED: true
            }

          */
          const p = { ...parameters, HAS_ALPHA: false, HAS_OMEGA: false, HAS_ALPHA_CHANGED: false, HAS_OMEGA_CHANGED: false }
          const r = Relay.regulate(p)

          expect(r).to.eql({
            SIGNAL: Signals.EXCEPTION,
            SERVICE: '061'
          })
        })
      })

      describe('With fields `HAS_ALPHA` as false and `HAS_OMEGA` as false and `HAS_ALPHA_CHANGED` as false and `HAS_OMEGA_CHANGED` as false and `WAS_OMEGA_DEFINED` as false', () => {
        it('returns an object with `SIGNAL` as `EXCEPTION` and `SERVICE` as `062`', () => {
          /*

            {
              HAS_ALPHA: false,
              HAS_OMEGA: false,
              HAS_ALPHA_CHANGED: false,
              HAS_OMEGA_CHANGED: false,
              WAS_ALPHA_DEFINED: true,
              WAS_OMEGA_DEFINED: false
            }

          */
          const p = { ...parameters, HAS_ALPHA: false, HAS_OMEGA: false, HAS_ALPHA_CHANGED: false, HAS_OMEGA_CHANGED: false, WAS_OMEGA_DEFINED: false }
          const r = Relay.regulate(p)

          expect(r).to.eql({
            SIGNAL: Signals.EXCEPTION,
            SERVICE: '062'
          })
        })
      })

      describe('With fields `HAS_ALPHA` as false and `HAS_OMEGA` as false and `HAS_ALPHA_CHANGED` as false and `HAS_OMEGA_CHANGED` as false and `WAS_ALPHA_DEFINED` as false', () => {
        it('returns an object with `SIGNAL` as `EXCEPTION` and `SERVICE` as `063`', () => {
          /*

            {
              HAS_ALPHA: false,
              HAS_OMEGA: false,
              HAS_ALPHA_CHANGED: false,
              HAS_OMEGA_CHANGED: false,
              WAS_ALPHA_DEFINED: false,
              WAS_OMEGA_DEFINED: true
            }

          */
          const p = { ...parameters, HAS_ALPHA: false, HAS_OMEGA: false, HAS_ALPHA_CHANGED: false, HAS_OMEGA_CHANGED: false, WAS_ALPHA_DEFINED: false }
          const r = Relay.regulate(p)

          expect(r).to.eql({
            SIGNAL: Signals.EXCEPTION,
            SERVICE: '063'
          })
        })
      })

      describe('All field values are false', () => {
        it('returns an object with `SIGNAL` as `INDEX` and `SERVICE` as `064`', () => {
          /*

            {
              HAS_ALPHA: false,
              HAS_OMEGA: false,
              HAS_ALPHA_CHANGED: false,
              HAS_OMEGA_CHANGED: false,
              WAS_ALPHA_DEFINED: false,
              WAS_OMEGA_DEFINED: false
            }

          */
          const p = { HAS_ALPHA: false, HAS_OMEGA: false, HAS_ALPHA_CHANGED: false, HAS_OMEGA_CHANGED: false, WAS_ALPHA_DEFINED: false, WAS_OMEGA_DEFINED: false }
          const r = Relay.regulate(p)

          expect(r).to.eql({
            SIGNAL: Signals.INDEX,
            SERVICE: '064'
          })
        })
      })
    })

    describe('Without parameters', () => {
      it('returns an object with `SIGNAL` as `INDEX` and `SERVICE` as `064`', () => {
        const r = Relay.regulate()

        expect(r).to.eql({
          SIGNAL: Signals.INDEX,
          SERVICE: '064'
        })
      })
    })
  })
})

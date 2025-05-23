/**
 *  @typedef {RelayTypes.RegulateParamsType} RegulateParamsType
 *  @typedef {RelayTypes.RegulateType} RegulateType
 */

import debug from 'debug'

import {
  Signals
} from 'shinkansen-signals'

const log = debug('shinkansen-relay')

log('`shinkansen` is awake')

/**
 *  @param {RegulateParamsType} params
 *  @returns {RegulateType}
 */
export default function regulate ({
  HAS_ALPHA = false,
  HAS_OMEGA = false,
  HAS_ALPHA_CHANGED = false,
  HAS_OMEGA_CHANGED = false,
  WAS_ALPHA_DEFINED = false,
  WAS_OMEGA_DEFINED = false
} = {}) {
  log('regulate')

  if (
    HAS_ALPHA
  ) {
    if (
      HAS_OMEGA
    ) {
      if (
        HAS_ALPHA_CHANGED
      ) {
        if (
          HAS_OMEGA_CHANGED
        ) {
          if (
            WAS_ALPHA_DEFINED
          ) {
            if (
              WAS_OMEGA_DEFINED
            ) {
              return {
                SIGNAL: Signals.CHANGE_ALPHA_CHANGE_OMEGA,
                SERVICE: '001'
              }
            } else {
              return {
                SIGNAL: Signals.CHANGE_ALPHA_ENTER_OMEGA,
                SERVICE: '002'
              }
            }
          } else {
            if (
              WAS_OMEGA_DEFINED
            ) {
              return {
                SIGNAL: Signals.EXCEPTION,
                SERVICE: '003'
              }
            } else {
              return {
                SIGNAL: Signals.ENTER_ALPHA_ENTER_OMEGA,
                SERVICE: '004'
              }
            }
          }
        } else {
          if (
            WAS_ALPHA_DEFINED
          ) {
            if (
              WAS_OMEGA_DEFINED
            ) {
              return {
                SIGNAL: Signals.EXCEPTION,
                SERVICE: '005'
              }
            } else {
              return {
                SIGNAL: Signals.EXCEPTION,
                SERVICE: '006'
              }
            }
          } else {
            if (
              WAS_OMEGA_DEFINED
            ) {
              return {
                SIGNAL: Signals.EXCEPTION,
                SERVICE: '007'
              }
            } else {
              return {
                SIGNAL: Signals.EXCEPTION,
                SERVICE: '008'
              }
            }
          }
        }
      } else {
        if (
          HAS_OMEGA_CHANGED
        ) {
          if (
            WAS_ALPHA_DEFINED
          ) {
            if (
              WAS_OMEGA_DEFINED
            ) {
              return {
                SIGNAL: Signals.REMAIN_ALPHA_CHANGE_OMEGA,
                SERVICE: '009'
              }
            } else {
              return {
                SIGNAL: Signals.REMAIN_ALPHA_ENTER_OMEGA,
                SERVICE: '010'
              }
            }
          } else {
            if (
              WAS_OMEGA_DEFINED
            ) {
              return {
                SIGNAL: Signals.EXCEPTION,
                SERVICE: '011'
              }
            } else {
              return {
                SIGNAL: Signals.EXCEPTION,
                SERVICE: '012'
              }
            }
          }
        } else {
          if (
            WAS_ALPHA_DEFINED
          ) {
            if (
              WAS_OMEGA_DEFINED
            ) {
              return {
                SIGNAL: Signals.REMAIN_ALPHA_REMAIN_OMEGA,
                SERVICE: '013'
              }
            } else {
              return {
                SIGNAL: Signals.EXCEPTION,
                SERVICE: '014'
              }
            }
          } else {
            if (
              WAS_OMEGA_DEFINED
            ) {
              return {
                SIGNAL: Signals.EXCEPTION,
                SERVICE: '015'
              }
            } else {
              return {
                SIGNAL: Signals.EXCEPTION,
                SERVICE: '016'
              }
            }
          }
        }
      }
    } else {
      if (
        HAS_ALPHA_CHANGED
      ) {
        if (
          HAS_OMEGA_CHANGED
        ) {
          if (
            WAS_ALPHA_DEFINED
          ) {
            if (
              WAS_OMEGA_DEFINED
            ) {
              return {
                SIGNAL: Signals.CHANGE_ALPHA_LEAVE_OMEGA,
                SERVICE: '017'
              }
            } else {
              return {
                SIGNAL: Signals.EXCEPTION,
                SERVICE: '018'
              }
            }
          } else {
            if (
              WAS_OMEGA_DEFINED
            ) {
              return {
                SIGNAL: Signals.EXCEPTION,
                SERVICE: '019'
              }
            } else {
              return {
                SIGNAL: Signals.EXCEPTION,
                SERVICE: '020'
              }
            }
          }
        } else {
          if (
            WAS_ALPHA_DEFINED
          ) {
            if (
              WAS_OMEGA_DEFINED
            ) {
              return {
                SIGNAL: Signals.EXCEPTION,
                SERVICE: '021'
              }
            } else {
              return {
                SIGNAL: Signals.CHANGE_ALPHA,
                SERVICE: '022'
              }
            }
          } else {
            if (
              WAS_OMEGA_DEFINED
            ) {
              return {
                SIGNAL: Signals.EXCEPTION,
                SERVICE: '023'
              }
            } else {
              return {
                SIGNAL: Signals.ENTER_ALPHA,
                SERVICE: '024'
              }
            }
          }
        }
      } else {
        if (
          HAS_OMEGA_CHANGED
        ) {
          if (
            WAS_ALPHA_DEFINED
          ) {
            if (
              WAS_OMEGA_DEFINED
            ) {
              return {
                SIGNAL: Signals.REMAIN_ALPHA_LEAVE_OMEGA,
                SERVICE: '025'
              }
            } else {
              return {
                SIGNAL: Signals.EXCEPTION,
                SERVICE: '026'
              }
            }
          } else {
            if (
              WAS_OMEGA_DEFINED
            ) {
              return {
                SIGNAL: Signals.EXCEPTION,
                SERVICE: '027'
              }
            } else {
              return {
                SIGNAL: Signals.EXCEPTION,
                SERVICE: '028'
              }
            }
          }
        } else {
          if (
            WAS_ALPHA_DEFINED
          ) {
            if (
              WAS_OMEGA_DEFINED
            ) {
              return {
                SIGNAL: Signals.EXCEPTION,
                SERVICE: '029'
              }
            } else {
              return {
                SIGNAL: Signals.REMAIN_ALPHA,
                SERVICE: '030'
              }
            }
          } else {
            if (
              WAS_OMEGA_DEFINED
            ) {
              return {
                SIGNAL: Signals.EXCEPTION,
                SERVICE: '031'
              }
            } else {
              return {
                SIGNAL: Signals.EXCEPTION,
                SERVICE: '032'
              }
            }
          }
        }
      }
    }
  } else {
    if (
      HAS_OMEGA
    ) {
      if (
        HAS_ALPHA_CHANGED
      ) {
        if (
          HAS_OMEGA_CHANGED
        ) {
          if (
            WAS_ALPHA_DEFINED
          ) {
            if (
              WAS_OMEGA_DEFINED
            ) {
              return {
                SIGNAL: Signals.EXCEPTION,
                SERVICE: '033'
              }
            } else {
              return {
                SIGNAL: Signals.EXCEPTION,
                SERVICE: '034'
              }
            }
          } else {
            if (
              WAS_OMEGA_DEFINED
            ) {
              return {
                SIGNAL: Signals.EXCEPTION,
                SERVICE: '035'
              }
            } else {
              return {
                SIGNAL: Signals.EXCEPTION,
                SERVICE: '036'
              }
            }
          }
        } else {
          if (
            WAS_ALPHA_DEFINED
          ) {
            if (
              WAS_OMEGA_DEFINED
            ) {
              return {
                SIGNAL: Signals.EXCEPTION,
                SERVICE: '037'
              }
            } else {
              return {
                SIGNAL: Signals.EXCEPTION,
                SERVICE: '038'
              }
            }
          } else {
            if (
              WAS_OMEGA_DEFINED
            ) {
              return {
                SIGNAL: Signals.EXCEPTION,
                SERVICE: '039'
              }
            } else {
              return {
                SIGNAL: Signals.EXCEPTION,
                SERVICE: '040'
              }
            }
          }
        }
      } else {
        if (
          HAS_OMEGA_CHANGED
        ) {
          if (
            WAS_ALPHA_DEFINED
          ) {
            if (
              WAS_OMEGA_DEFINED
            ) {
              return {
                SIGNAL: Signals.EXCEPTION,
                SERVICE: '041'
              }
            } else {
              return {
                SIGNAL: Signals.EXCEPTION,
                SERVICE: '042'
              }
            }
          } else {
            if (
              WAS_OMEGA_DEFINED
            ) {
              return {
                SIGNAL: Signals.EXCEPTION,
                SERVICE: '043'
              }
            } else {
              return {
                SIGNAL: Signals.EXCEPTION,
                SERVICE: '044'
              }
            }
          }
        } else {
          if (
            WAS_ALPHA_DEFINED
          ) {
            if (
              WAS_OMEGA_DEFINED
            ) {
              return {
                SIGNAL: Signals.EXCEPTION,
                SERVICE: '045'
              }
            } else {
              return {
                SIGNAL: Signals.EXCEPTION,
                SERVICE: '046'
              }
            }
          } else {
            if (
              WAS_OMEGA_DEFINED
            ) {
              return {
                SIGNAL: Signals.EXCEPTION,
                SERVICE: '047'
              }
            } else {
              return {
                SIGNAL: Signals.EXCEPTION,
                SERVICE: '048'
              }
            }
          }
        }
      }
    } else {
      if (
        HAS_ALPHA_CHANGED
      ) {
        if (
          HAS_OMEGA_CHANGED
        ) {
          if (
            WAS_ALPHA_DEFINED
          ) {
            if (
              WAS_OMEGA_DEFINED
            ) {
              return {
                SIGNAL: Signals.LEAVE_ALPHA_LEAVE_OMEGA,
                SERVICE: '049'
              }
            } else {
              return {
                SIGNAL: Signals.EXCEPTION,
                SERVICE: '050'
              }
            }
          } else {
            if (
              WAS_OMEGA_DEFINED
            ) {
              return {
                SIGNAL: Signals.EXCEPTION,
                SERVICE: '051'
              }
            } else {
              return {
                SIGNAL: Signals.EXCEPTION,
                SERVICE: '052'
              }
            }
          }
        } else {
          if (
            WAS_ALPHA_DEFINED
          ) {
            if (
              WAS_OMEGA_DEFINED
            ) {
              return {
                SIGNAL: Signals.EXCEPTION,
                SERVICE: '053'
              }
            } else {
              return {
                SIGNAL: Signals.LEAVE_ALPHA,
                SERVICE: '054'
              }
            }
          } else {
            if (
              WAS_OMEGA_DEFINED
            ) {
              return {
                SIGNAL: Signals.EXCEPTION,
                SERVICE: '055'
              }
            } else {
              return {
                SIGNAL: Signals.EXCEPTION,
                SERVICE: '056'
              }
            }
          }
        }
      } else {
        if (
          HAS_OMEGA_CHANGED
        ) {
          if (
            WAS_ALPHA_DEFINED
          ) {
            if (
              WAS_OMEGA_DEFINED
            ) {
              return {
                SIGNAL: Signals.EXCEPTION,
                SERVICE: '057'
              }
            } else {
              return {
                SIGNAL: Signals.EXCEPTION,
                SERVICE: '058'
              }
            }
          } else {
            if (
              WAS_OMEGA_DEFINED
            ) {
              return {
                SIGNAL: Signals.EXCEPTION,
                SERVICE: '059'
              }
            } else {
              return {
                SIGNAL: Signals.EXCEPTION,
                SERVICE: '060'
              }
            }
          }
        } else {
          if (
            WAS_ALPHA_DEFINED
          ) {
            if (
              WAS_OMEGA_DEFINED
            ) {
              return {
                SIGNAL: Signals.EXCEPTION,
                SERVICE: '061'
              }
            } else {
              return {
                SIGNAL: Signals.EXCEPTION,
                SERVICE: '062'
              }
            }
          } else {
            if (
              WAS_OMEGA_DEFINED
            ) {
              return {
                SIGNAL: Signals.EXCEPTION,
                SERVICE: '063'
              }
            } else {
              return {
                SIGNAL: Signals.INDEX,
                SERVICE: '064'
              }
            }
          }
        }
      }
    }
  }
}

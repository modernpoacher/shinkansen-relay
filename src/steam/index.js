const ALPHA = 'alpha'
const OMEGA = 'omega'

const EMBARK = 'embark'
const DEBARK = 'debark'

const INDEX = 'INDEX'

const ENTER_ALPHA = 'ENTER_ALPHA'
const LEAVE_ALPHA = 'LEAVE_ALPHA'

const CHANGE_ALPHA = 'CHANGE_ALPHA'
const REMAIN_ALPHA = 'REMAIN_ALPHA'

const ENTER_OMEGA = 'ENTER_OMEGA'
const LEAVE_OMEGA = 'LEAVE_OMEGA'

const CHANGE_OMEGA = 'CHANGE_OMEGA'
const REMAIN_OMEGA = 'REMAIN_OMEGA'

const ENTER_ALPHA_ENTER_OMEGA = 'ENTER_ALPHA_ENTER_OMEGA'
const LEAVE_ALPHA_LEAVE_OMEGA = 'LEAVE_ALPHA_LEAVE_OMEGA'

const CHANGE_ALPHA_ENTER_OMEGA = 'CHANGE_ALPHA_ENTER_OMEGA'
const CHANGE_ALPHA_LEAVE_OMEGA = 'CHANGE_ALPHA_LEAVE_OMEGA'

const REMAIN_ALPHA_ENTER_OMEGA = 'REMAIN_ALPHA_ENTER_OMEGA'
const REMAIN_ALPHA_LEAVE_OMEGA = 'REMAIN_ALPHA_LEAVE_OMEGA'

const CHANGE_ALPHA_CHANGE_OMEGA = 'CHANGE_ALPHA_CHANGE_OMEGA'
const CHANGE_ALPHA_REMAIN_OMEGA = 'CHANGE_ALPHA_REMAIN_OMEGA'

const REMAIN_ALPHA_CHANGE_OMEGA = 'REMAIN_ALPHA_CHANGE_OMEGA'
const REMAIN_ALPHA_REMAIN_OMEGA = 'REMAIN_ALPHA_REMAIN_OMEGA'

const EXCEPTION = 'EXCEPTION'

const FAILURE = 0
const SUCCESS = 1
const IN_PROGRESS = 3
const NO_DECISION = 4
const COMPLETE = 5
const PENDING = 6

function regulate ({ now: { alpha, omega } = {}, was = {} }) {
  const HAS_ALPHA = !!alpha
  const HAS_OMEGA = !!omega
  const HAS_ALPHA_CHANGED = (alpha !== was[ALPHA])
  const HAS_OMEGA_CHANGED = (omega !== was[OMEGA])
  const WAS_ALPHA_DEFINED = (ALPHA in was)
  const WAS_OMEGA_DEFINED = (OMEGA in was)

  return {
    HAS_ALPHA,
    HAS_OMEGA,
    HAS_ALPHA_CHANGED,
    HAS_OMEGA_CHANGED,
    WAS_ALPHA_DEFINED,
    WAS_OMEGA_DEFINED
  }
}

function generate ({
  HAS_ALPHA,
  HAS_OMEGA,
  HAS_ALPHA_CHANGED,
  HAS_OMEGA_CHANGED,
  WAS_ALPHA_DEFINED,
  WAS_OMEGA_DEFINED
}) {
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
                ROUTE: CHANGE_ALPHA_CHANGE_OMEGA,
                PIVOT: '001'
              }
            } else {
              return {
                ROUTE: CHANGE_ALPHA_ENTER_OMEGA,
                PIVOT: '002'
              }
            }
          } else {
            if (
              WAS_OMEGA_DEFINED
            ) {
              return {
                ROUTE: EXCEPTION,
                PIVOT: '003'
              }
            } else {
              return {
                ROUTE: ENTER_ALPHA_ENTER_OMEGA,
                PIVOT: '004'
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
                ROUTE: EXCEPTION,
                PIVOT: '005'
              }
            } else {
              return {
                ROUTE: EXCEPTION,
                PIVOT: '006'
              }
            }
          } else {
            if (
              WAS_OMEGA_DEFINED
            ) {
              return {
                ROUTE: EXCEPTION,
                PIVOT: '007'
              }
            } else {
              return {
                ROUTE: EXCEPTION,
                PIVOT: '008'
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
                ROUTE: REMAIN_ALPHA_CHANGE_OMEGA,
                PIVOT: '009'
              }
            } else {
              return {
                ROUTE: REMAIN_ALPHA_ENTER_OMEGA,
                PIVOT: '010'
              }
            }
          } else {
            if (
              WAS_OMEGA_DEFINED
            ) {
              return {
                ROUTE: EXCEPTION,
                PIVOT: '011'
              }
            } else {
              return {
                ROUTE: EXCEPTION,
                PIVOT: '012'
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
                ROUTE: REMAIN_ALPHA_REMAIN_OMEGA,
                PIVOT: '013'
              }
            } else {
              return {
                ROUTE: EXCEPTION,
                PIVOT: '014'
              }
            }
          } else {
            if (
              WAS_OMEGA_DEFINED
            ) {
              return {
                ROUTE: EXCEPTION,
                PIVOT: '015'
              }
            } else {
              return {
                ROUTE: EXCEPTION,
                PIVOT: '016'
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
                ROUTE: CHANGE_ALPHA_LEAVE_OMEGA,
                PIVOT: '017'
              }
            } else {
              return {
                ROUTE: EXCEPTION,
                PIVOT: '018'
              }
            }
          } else {
            if (
              WAS_OMEGA_DEFINED
            ) {
              return {
                ROUTE: EXCEPTION,
                PIVOT: '019'
              }
            } else {
              return {
                ROUTE: EXCEPTION,
                PIVOT: '020'
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
                ROUTE: EXCEPTION,
                PIVOT: '021'
              }
            } else {
              return {
                ROUTE: CHANGE_ALPHA,
                PIVOT: '022'
              }
            }
          } else {
            if (
              WAS_OMEGA_DEFINED
            ) {
              return {
                ROUTE: EXCEPTION,
                PIVOT: '023'
              }
            } else {
              return {
                ROUTE: ENTER_ALPHA,
                PIVOT: '024'
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
                ROUTE: REMAIN_ALPHA_LEAVE_OMEGA,
                PIVOT: '025'
              }
            } else {
              return {
                ROUTE: EXCEPTION,
                PIVOT: '026'
              }
            }
          } else {
            if (
              WAS_OMEGA_DEFINED
            ) {
              return {
                ROUTE: EXCEPTION,
                PIVOT: '027'
              }
            } else {
              return {
                ROUTE: EXCEPTION,
                PIVOT: '028'
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
                ROUTE: EXCEPTION,
                PIVOT: '029'
              }
            } else {
              return {
                ROUTE: REMAIN_ALPHA,
                PIVOT: '030'
              }
            }
          } else {
            if (
              WAS_OMEGA_DEFINED
            ) {
              return {
                ROUTE: EXCEPTION,
                PIVOT: '031'
              }
            } else {
              return {
                ROUTE: EXCEPTION,
                PIVOT: '032'
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
                ROUTE: EXCEPTION,
                PIVOT: '033'
              }
            } else {
              return {
                ROUTE: EXCEPTION,
                PIVOT: '034'
              }
            }
          } else {
            if (
              WAS_OMEGA_DEFINED
            ) {
              return {
                ROUTE: EXCEPTION,
                PIVOT: '035'
              }
            } else {
              return {
                ROUTE: EXCEPTION,
                PIVOT: '036'
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
                  ROUTE: EXCEPTION,
                  PIVOT: '037'
                }
              } else {
                return {
                  ROUTE: EXCEPTION,
                  PIVOT: '038'
                }
              }
            } else {
              if (
                WAS_OMEGA_DEFINED
              ) {
                return {
                  ROUTE: EXCEPTION,
                  PIVOT: '039'
                }
              } else {
                return {
                  ROUTE: EXCEPTION,
                  PIVOT: '040'
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
                  ROUTE: EXCEPTION,
                  PIVOT: '041'
                }
              } else {
                return {
                  ROUTE: EXCEPTION,
                  PIVOT: '042'
                }
              }
            } else {
              if (
                WAS_OMEGA_DEFINED
              ) {
                return {
                  ROUTE: EXCEPTION,
                  PIVOT: '043'
                }
              } else {
                return {
                  ROUTE: EXCEPTION,
                  PIVOT: '044'
                }
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
                ROUTE: EXCEPTION,
                PIVOT: '045'
              }
            } else {
              return {
                ROUTE: EXCEPTION,
                PIVOT: '046'
              }
            }
          } else {
            if (
              WAS_OMEGA_DEFINED
            ) {
              return {
                ROUTE: EXCEPTION,
                PIVOT: '047'
              }
            } else {
              return {
                ROUTE: EXCEPTION,
                PIVOT: '048'
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
                ROUTE: EXCEPTION,
                PIVOT: '049'
              }
            } else {
              return {
                ROUTE: EXCEPTION,
                PIVOT: '050'
              }
            }
          } else {
            if (
              WAS_OMEGA_DEFINED
            ) {
              return {
                ROUTE: EXCEPTION,
                PIVOT: '051'
              }
            } else {
              return {
                ROUTE: EXCEPTION,
                PIVOT: '052'
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
                ROUTE: LEAVE_ALPHA_LEAVE_OMEGA,
                PIVOT: '053'
              }
            } else {
              return {
                ROUTE: EXCEPTION,
                PIVOT: '054'
              }
            }
          } else {
            if (
              WAS_OMEGA_DEFINED
            ) {
              return {
                ROUTE: EXCEPTION,
                PIVOT: '055'
              }
            } else {
              return {
                ROUTE: EXCEPTION,
                PIVOT: '056'
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
                ROUTE: EXCEPTION,
                PIVOT: '057'
              }
            } else {
              return {
                ROUTE: LEAVE_ALPHA,
                PIVOT: '058'
              }
            }
          } else {
            if (
              WAS_OMEGA_DEFINED
            ) {
              return {
                ROUTE: EXCEPTION,
                PIVOT: '059'
              }
            } else {
              return {
                ROUTE: EXCEPTION,
                PIVOT: '060'
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
                ROUTE: EXCEPTION,
                PIVOT: '061'
              }
            } else {
              return {
                ROUTE: EXCEPTION,
                PIVOT: '062'
              }
            }
          } else {
            if (
              WAS_OMEGA_DEFINED
            ) {
              return {
                ROUTE: EXCEPTION,
                PIVOT: '063'
              }
            } else {
              return {
                ROUTE: EXCEPTION,
                PIVOT: '064'
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
                ROUTE: EXCEPTION,
                PIVOT: '065'
              }
            } else {
              return {
                ROUTE: EXCEPTION,
                PIVOT: '066'
              }
            }
          } else {
            if (
              WAS_OMEGA_DEFINED
            ) {
              return {
                ROUTE: EXCEPTION,
                PIVOT: '067'
              }
            } else {
              return {
                ROUTE: INDEX,
                PIVOT: '068'
              }
            }
          }
        }
      }
    }
  }
}

export class Steam {
  static get ALPHA () {
    return ALPHA
  }
  static get OMEGA () {
    return OMEGA
  }

  static get EMBARK () {
    return EMBARK
  }
  static get DEBARK () {
    return DEBARK
  }

  static get INDEX () {
    return INDEX
  }

  static get ENTER_ALPHA () {
    return ENTER_ALPHA
  }
  static get LEAVE_ALPHA () {
    return LEAVE_ALPHA
  }

  static get CHANGE_ALPHA () {
    return CHANGE_ALPHA
  }
  static get REMAIN_ALPHA () {
    return REMAIN_ALPHA
  }

  static get ENTER_OMEGA () {
    return ENTER_OMEGA
  }
  static get LEAVE_OMEGA () {
    return LEAVE_OMEGA
  }

  static get CHANGE_OMEGA () {
    return CHANGE_OMEGA
  }
  static get REMAIN_OMEGA () {
    return REMAIN_OMEGA
  }

  static get ENTER_ALPHA_ENTER_OMEGA () {
    return ENTER_ALPHA_ENTER_OMEGA
  }
  static get LEAVE_ALPHA_LEAVE_OMEGA () {
    return LEAVE_ALPHA_LEAVE_OMEGA
  }

  static get CHANGE_ALPHA_ENTER_OMEGA () {
    return CHANGE_ALPHA_ENTER_OMEGA
  }
  static get CHANGE_ALPHA_LEAVE_OMEGA () {
    return CHANGE_ALPHA_LEAVE_OMEGA
  }

  static get REMAIN_ALPHA_ENTER_OMEGA () {
    return REMAIN_ALPHA_ENTER_OMEGA
  }
  static get REMAIN_ALPHA_LEAVE_OMEGA () {
    return REMAIN_ALPHA_LEAVE_OMEGA
  }

  static get CHANGE_ALPHA_CHANGE_OMEGA () {
    return CHANGE_ALPHA_CHANGE_OMEGA
  }
  static get CHANGE_ALPHA_REMAIN_OMEGA () {
    return CHANGE_ALPHA_REMAIN_OMEGA
  }

  static get REMAIN_ALPHA_CHANGE_OMEGA () {
    return REMAIN_ALPHA_CHANGE_OMEGA
  }
  static get REMAIN_ALPHA_REMAIN_OMEGA () {
    return REMAIN_ALPHA_REMAIN_OMEGA
  }

  static get EXCEPTION () {
    return EXCEPTION
  }

  static get FAILURE () {
    return FAILURE
  }
  static get SUCCESS () {
    return SUCCESS
  }
  static get IN_PROGRESS () {
    return IN_PROGRESS
  }
  static get NO_DECISION () {
    return NO_DECISION
  }
  static get COMPLETE () {
    return COMPLETE
  }
  static get PENDING () {
    return PENDING
  }

  static regulate = regulate

  static generate = generate
}

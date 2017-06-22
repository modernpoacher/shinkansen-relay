'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ac = ac;

var _shinkansenSignals = require('shinkansen-signals');

function ac(_ref) {
  var HAS_ALPHA = _ref.HAS_ALPHA,
      HAS_OMEGA = _ref.HAS_OMEGA,
      HAS_ALPHA_CHANGED = _ref.HAS_ALPHA_CHANGED,
      HAS_OMEGA_CHANGED = _ref.HAS_OMEGA_CHANGED,
      WAS_ALPHA_DEFINED = _ref.WAS_ALPHA_DEFINED,
      WAS_OMEGA_DEFINED = _ref.WAS_OMEGA_DEFINED;

  if (HAS_ALPHA) {
    if (HAS_OMEGA) {
      if (HAS_ALPHA_CHANGED) {
        if (HAS_OMEGA_CHANGED) {
          if (WAS_ALPHA_DEFINED) {
            if (WAS_OMEGA_DEFINED) {
              return {
                SIGNAL: _shinkansenSignals.Signals.CHANGE_ALPHA_CHANGE_OMEGA,
                CHARGE: '001'
              };
            } else {
              return {
                SIGNAL: _shinkansenSignals.Signals.CHANGE_ALPHA_ENTER_OMEGA,
                CHARGE: '002'
              };
            }
          } else {
            if (WAS_OMEGA_DEFINED) {
              return {
                SIGNAL: _shinkansenSignals.Signals.EXCEPTION,
                CHARGE: '003'
              };
            } else {
              return {
                SIGNAL: _shinkansenSignals.Signals.ENTER_ALPHA_ENTER_OMEGA,
                CHARGE: '004'
              };
            }
          }
        } else {
          if (WAS_ALPHA_DEFINED) {
            if (WAS_OMEGA_DEFINED) {
              return {
                SIGNAL: _shinkansenSignals.Signals.EXCEPTION,
                CHARGE: '005'
              };
            } else {
              return {
                SIGNAL: _shinkansenSignals.Signals.EXCEPTION,
                CHARGE: '006'
              };
            }
          } else {
            if (WAS_OMEGA_DEFINED) {
              return {
                SIGNAL: _shinkansenSignals.Signals.EXCEPTION,
                CHARGE: '007'
              };
            } else {
              return {
                SIGNAL: _shinkansenSignals.Signals.EXCEPTION,
                CHARGE: '008'
              };
            }
          }
        }
      } else {
        if (HAS_OMEGA_CHANGED) {
          if (WAS_ALPHA_DEFINED) {
            if (WAS_OMEGA_DEFINED) {
              return {
                SIGNAL: _shinkansenSignals.Signals.REMAIN_ALPHA_CHANGE_OMEGA,
                CHARGE: '009'
              };
            } else {
              return {
                SIGNAL: _shinkansenSignals.Signals.REMAIN_ALPHA_ENTER_OMEGA,
                CHARGE: '010'
              };
            }
          } else {
            if (WAS_OMEGA_DEFINED) {
              return {
                SIGNAL: _shinkansenSignals.Signals.EXCEPTION,
                CHARGE: '011'
              };
            } else {
              return {
                SIGNAL: _shinkansenSignals.Signals.EXCEPTION,
                CHARGE: '012'
              };
            }
          }
        } else {
          if (WAS_ALPHA_DEFINED) {
            if (WAS_OMEGA_DEFINED) {
              return {
                SIGNAL: _shinkansenSignals.Signals.REMAIN_ALPHA_REMAIN_OMEGA,
                CHARGE: '013'
              };
            } else {
              return {
                SIGNAL: _shinkansenSignals.Signals.EXCEPTION,
                CHARGE: '014'
              };
            }
          } else {
            if (WAS_OMEGA_DEFINED) {
              return {
                SIGNAL: _shinkansenSignals.Signals.EXCEPTION,
                CHARGE: '015'
              };
            } else {
              return {
                SIGNAL: _shinkansenSignals.Signals.EXCEPTION,
                CHARGE: '016'
              };
            }
          }
        }
      }
    } else {
      if (HAS_ALPHA_CHANGED) {
        if (HAS_OMEGA_CHANGED) {
          if (WAS_ALPHA_DEFINED) {
            if (WAS_OMEGA_DEFINED) {
              return {
                SIGNAL: _shinkansenSignals.Signals.CHANGE_ALPHA_LEAVE_OMEGA,
                CHARGE: '017'
              };
            } else {
              return {
                SIGNAL: _shinkansenSignals.Signals.EXCEPTION,
                CHARGE: '018'
              };
            }
          } else {
            if (WAS_OMEGA_DEFINED) {
              return {
                SIGNAL: _shinkansenSignals.Signals.EXCEPTION,
                CHARGE: '019'
              };
            } else {
              return {
                SIGNAL: _shinkansenSignals.Signals.EXCEPTION,
                CHARGE: '020'
              };
            }
          }
        } else {
          if (WAS_ALPHA_DEFINED) {
            if (WAS_OMEGA_DEFINED) {
              return {
                SIGNAL: _shinkansenSignals.Signals.EXCEPTION,
                CHARGE: '021'
              };
            } else {
              return {
                SIGNAL: _shinkansenSignals.Signals.CHANGE_ALPHA,
                CHARGE: '022'
              };
            }
          } else {
            if (WAS_OMEGA_DEFINED) {
              return {
                SIGNAL: _shinkansenSignals.Signals.EXCEPTION,
                CHARGE: '023'
              };
            } else {
              return {
                SIGNAL: _shinkansenSignals.Signals.ENTER_ALPHA,
                CHARGE: '024'
              };
            }
          }
        }
      } else {
        if (HAS_OMEGA_CHANGED) {
          if (WAS_ALPHA_DEFINED) {
            if (WAS_OMEGA_DEFINED) {
              return {
                SIGNAL: _shinkansenSignals.Signals.REMAIN_ALPHA_LEAVE_OMEGA,
                CHARGE: '025'
              };
            } else {
              return {
                SIGNAL: _shinkansenSignals.Signals.EXCEPTION,
                CHARGE: '026'
              };
            }
          } else {
            if (WAS_OMEGA_DEFINED) {
              return {
                SIGNAL: _shinkansenSignals.Signals.EXCEPTION,
                CHARGE: '027'
              };
            } else {
              return {
                SIGNAL: _shinkansenSignals.Signals.EXCEPTION,
                CHARGE: '028'
              };
            }
          }
        } else {
          if (WAS_ALPHA_DEFINED) {
            if (WAS_OMEGA_DEFINED) {
              return {
                SIGNAL: _shinkansenSignals.Signals.EXCEPTION,
                CHARGE: '029'
              };
            } else {
              return {
                SIGNAL: _shinkansenSignals.Signals.REMAIN_ALPHA,
                CHARGE: '030'
              };
            }
          } else {
            if (WAS_OMEGA_DEFINED) {
              return {
                SIGNAL: _shinkansenSignals.Signals.EXCEPTION,
                CHARGE: '031'
              };
            } else {
              return {
                SIGNAL: _shinkansenSignals.Signals.EXCEPTION,
                CHARGE: '032'
              };
            }
          }
        }
      }
    }
  } else {
    if (HAS_OMEGA) {
      if (HAS_ALPHA_CHANGED) {
        if (HAS_OMEGA_CHANGED) {
          if (WAS_ALPHA_DEFINED) {
            if (WAS_OMEGA_DEFINED) {
              return {
                SIGNAL: _shinkansenSignals.Signals.EXCEPTION,
                CHARGE: '033'
              };
            } else {
              return {
                SIGNAL: _shinkansenSignals.Signals.EXCEPTION,
                CHARGE: '034'
              };
            }
          } else {
            if (WAS_OMEGA_DEFINED) {
              return {
                SIGNAL: _shinkansenSignals.Signals.EXCEPTION,
                CHARGE: '035'
              };
            } else {
              return {
                SIGNAL: _shinkansenSignals.Signals.EXCEPTION,
                CHARGE: '036'
              };
            }
          }
        } else {
          if (HAS_OMEGA_CHANGED) {
            if (WAS_ALPHA_DEFINED) {
              if (WAS_OMEGA_DEFINED) {
                return {
                  SIGNAL: _shinkansenSignals.Signals.EXCEPTION,
                  CHARGE: '037'
                };
              } else {
                return {
                  SIGNAL: _shinkansenSignals.Signals.EXCEPTION,
                  CHARGE: '038'
                };
              }
            } else {
              if (WAS_OMEGA_DEFINED) {
                return {
                  SIGNAL: _shinkansenSignals.Signals.EXCEPTION,
                  CHARGE: '039'
                };
              } else {
                return {
                  SIGNAL: _shinkansenSignals.Signals.EXCEPTION,
                  CHARGE: '040'
                };
              }
            }
          } else {
            if (WAS_ALPHA_DEFINED) {
              if (WAS_OMEGA_DEFINED) {
                return {
                  SIGNAL: _shinkansenSignals.Signals.EXCEPTION,
                  CHARGE: '041'
                };
              } else {
                return {
                  SIGNAL: _shinkansenSignals.Signals.EXCEPTION,
                  CHARGE: '042'
                };
              }
            } else {
              if (WAS_OMEGA_DEFINED) {
                return {
                  SIGNAL: _shinkansenSignals.Signals.EXCEPTION,
                  CHARGE: '043'
                };
              } else {
                return {
                  SIGNAL: _shinkansenSignals.Signals.EXCEPTION,
                  CHARGE: '044'
                };
              }
            }
          }
        }
      } else {
        if (HAS_OMEGA_CHANGED) {
          if (WAS_ALPHA_DEFINED) {
            if (WAS_OMEGA_DEFINED) {
              return {
                SIGNAL: _shinkansenSignals.Signals.EXCEPTION,
                CHARGE: '045'
              };
            } else {
              return {
                SIGNAL: _shinkansenSignals.Signals.EXCEPTION,
                CHARGE: '046'
              };
            }
          } else {
            if (WAS_OMEGA_DEFINED) {
              return {
                SIGNAL: _shinkansenSignals.Signals.EXCEPTION,
                CHARGE: '047'
              };
            } else {
              return {
                SIGNAL: _shinkansenSignals.Signals.EXCEPTION,
                CHARGE: '048'
              };
            }
          }
        } else {
          if (WAS_ALPHA_DEFINED) {
            if (WAS_OMEGA_DEFINED) {
              return {
                SIGNAL: _shinkansenSignals.Signals.EXCEPTION,
                CHARGE: '049'
              };
            } else {
              return {
                SIGNAL: _shinkansenSignals.Signals.EXCEPTION,
                CHARGE: '050'
              };
            }
          } else {
            if (WAS_OMEGA_DEFINED) {
              return {
                SIGNAL: _shinkansenSignals.Signals.EXCEPTION,
                CHARGE: '051'
              };
            } else {
              return {
                SIGNAL: _shinkansenSignals.Signals.EXCEPTION,
                CHARGE: '052'
              };
            }
          }
        }
      }
    } else {
      if (HAS_ALPHA_CHANGED) {
        if (HAS_OMEGA_CHANGED) {
          if (WAS_ALPHA_DEFINED) {
            if (WAS_OMEGA_DEFINED) {
              return {
                SIGNAL: _shinkansenSignals.Signals.LEAVE_ALPHA_LEAVE_OMEGA,
                CHARGE: '053'
              };
            } else {
              return {
                SIGNAL: _shinkansenSignals.Signals.EXCEPTION,
                CHARGE: '054'
              };
            }
          } else {
            if (WAS_OMEGA_DEFINED) {
              return {
                SIGNAL: _shinkansenSignals.Signals.EXCEPTION,
                CHARGE: '055'
              };
            } else {
              return {
                SIGNAL: _shinkansenSignals.Signals.EXCEPTION,
                CHARGE: '056'
              };
            }
          }
        } else {
          if (WAS_ALPHA_DEFINED) {
            if (WAS_OMEGA_DEFINED) {
              return {
                SIGNAL: _shinkansenSignals.Signals.EXCEPTION,
                CHARGE: '057'
              };
            } else {
              return {
                SIGNAL: _shinkansenSignals.Signals.LEAVE_ALPHA,
                CHARGE: '058'
              };
            }
          } else {
            if (WAS_OMEGA_DEFINED) {
              return {
                SIGNAL: _shinkansenSignals.Signals.EXCEPTION,
                CHARGE: '059'
              };
            } else {
              return {
                SIGNAL: _shinkansenSignals.Signals.EXCEPTION,
                CHARGE: '060'
              };
            }
          }
        }
      } else {
        if (HAS_OMEGA_CHANGED) {
          if (WAS_ALPHA_DEFINED) {
            if (WAS_OMEGA_DEFINED) {
              return {
                SIGNAL: _shinkansenSignals.Signals.EXCEPTION,
                CHARGE: '061'
              };
            } else {
              return {
                SIGNAL: _shinkansenSignals.Signals.EXCEPTION,
                CHARGE: '062'
              };
            }
          } else {
            if (WAS_OMEGA_DEFINED) {
              return {
                SIGNAL: _shinkansenSignals.Signals.EXCEPTION,
                CHARGE: '063'
              };
            } else {
              return {
                SIGNAL: _shinkansenSignals.Signals.EXCEPTION,
                CHARGE: '064'
              };
            }
          }
        } else {
          if (WAS_ALPHA_DEFINED) {
            if (WAS_OMEGA_DEFINED) {
              return {
                SIGNAL: _shinkansenSignals.Signals.EXCEPTION,
                CHARGE: '065'
              };
            } else {
              return {
                SIGNAL: _shinkansenSignals.Signals.EXCEPTION,
                CHARGE: '066'
              };
            }
          } else {
            if (WAS_OMEGA_DEFINED) {
              return {
                SIGNAL: _shinkansenSignals.Signals.EXCEPTION,
                CHARGE: '067'
              };
            } else {
              return {
                SIGNAL: _shinkansenSignals.Signals.INDEX,
                CHARGE: '068'
              };
            }
          }
        }
      }
    }
  }
}
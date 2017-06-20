'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generate = generate;

var _reactBoiler = require('react-boiler');

function generate(_ref) {
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
                STEAM: _reactBoiler.Boiler.CHANGE_ALPHA_CHANGE_OMEGA,
                TEMPERATURE: '001'
              };
            } else {
              return {
                STEAM: _reactBoiler.Boiler.CHANGE_ALPHA_ENTER_OMEGA,
                TEMPERATURE: '002'
              };
            }
          } else {
            if (WAS_OMEGA_DEFINED) {
              return {
                STEAM: _reactBoiler.Boiler.EXCEPTION,
                TEMPERATURE: '003'
              };
            } else {
              return {
                STEAM: _reactBoiler.Boiler.ENTER_ALPHA_ENTER_OMEGA,
                TEMPERATURE: '004'
              };
            }
          }
        } else {
          if (WAS_ALPHA_DEFINED) {
            if (WAS_OMEGA_DEFINED) {
              return {
                STEAM: _reactBoiler.Boiler.EXCEPTION,
                TEMPERATURE: '005'
              };
            } else {
              return {
                STEAM: _reactBoiler.Boiler.EXCEPTION,
                TEMPERATURE: '006'
              };
            }
          } else {
            if (WAS_OMEGA_DEFINED) {
              return {
                STEAM: _reactBoiler.Boiler.EXCEPTION,
                TEMPERATURE: '007'
              };
            } else {
              return {
                STEAM: _reactBoiler.Boiler.EXCEPTION,
                TEMPERATURE: '008'
              };
            }
          }
        }
      } else {
        if (HAS_OMEGA_CHANGED) {
          if (WAS_ALPHA_DEFINED) {
            if (WAS_OMEGA_DEFINED) {
              return {
                STEAM: _reactBoiler.Boiler.REMAIN_ALPHA_CHANGE_OMEGA,
                TEMPERATURE: '009'
              };
            } else {
              return {
                STEAM: _reactBoiler.Boiler.REMAIN_ALPHA_ENTER_OMEGA,
                TEMPERATURE: '010'
              };
            }
          } else {
            if (WAS_OMEGA_DEFINED) {
              return {
                STEAM: _reactBoiler.Boiler.EXCEPTION,
                TEMPERATURE: '011'
              };
            } else {
              return {
                STEAM: _reactBoiler.Boiler.EXCEPTION,
                TEMPERATURE: '012'
              };
            }
          }
        } else {
          if (WAS_ALPHA_DEFINED) {
            if (WAS_OMEGA_DEFINED) {
              return {
                STEAM: _reactBoiler.Boiler.REMAIN_ALPHA_REMAIN_OMEGA,
                TEMPERATURE: '013'
              };
            } else {
              return {
                STEAM: _reactBoiler.Boiler.EXCEPTION,
                TEMPERATURE: '014'
              };
            }
          } else {
            if (WAS_OMEGA_DEFINED) {
              return {
                STEAM: _reactBoiler.Boiler.EXCEPTION,
                TEMPERATURE: '015'
              };
            } else {
              return {
                STEAM: _reactBoiler.Boiler.EXCEPTION,
                TEMPERATURE: '016'
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
                STEAM: _reactBoiler.Boiler.CHANGE_ALPHA_LEAVE_OMEGA,
                TEMPERATURE: '017'
              };
            } else {
              return {
                STEAM: _reactBoiler.Boiler.EXCEPTION,
                TEMPERATURE: '018'
              };
            }
          } else {
            if (WAS_OMEGA_DEFINED) {
              return {
                STEAM: _reactBoiler.Boiler.EXCEPTION,
                TEMPERATURE: '019'
              };
            } else {
              return {
                STEAM: _reactBoiler.Boiler.EXCEPTION,
                TEMPERATURE: '020'
              };
            }
          }
        } else {
          if (WAS_ALPHA_DEFINED) {
            if (WAS_OMEGA_DEFINED) {
              return {
                STEAM: _reactBoiler.Boiler.EXCEPTION,
                TEMPERATURE: '021'
              };
            } else {
              return {
                STEAM: _reactBoiler.Boiler.CHANGE_ALPHA,
                TEMPERATURE: '022'
              };
            }
          } else {
            if (WAS_OMEGA_DEFINED) {
              return {
                STEAM: _reactBoiler.Boiler.EXCEPTION,
                TEMPERATURE: '023'
              };
            } else {
              return {
                STEAM: _reactBoiler.Boiler.ENTER_ALPHA,
                TEMPERATURE: '024'
              };
            }
          }
        }
      } else {
        if (HAS_OMEGA_CHANGED) {
          if (WAS_ALPHA_DEFINED) {
            if (WAS_OMEGA_DEFINED) {
              return {
                STEAM: _reactBoiler.Boiler.REMAIN_ALPHA_LEAVE_OMEGA,
                TEMPERATURE: '025'
              };
            } else {
              return {
                STEAM: _reactBoiler.Boiler.EXCEPTION,
                TEMPERATURE: '026'
              };
            }
          } else {
            if (WAS_OMEGA_DEFINED) {
              return {
                STEAM: _reactBoiler.Boiler.EXCEPTION,
                TEMPERATURE: '027'
              };
            } else {
              return {
                STEAM: _reactBoiler.Boiler.EXCEPTION,
                TEMPERATURE: '028'
              };
            }
          }
        } else {
          if (WAS_ALPHA_DEFINED) {
            if (WAS_OMEGA_DEFINED) {
              return {
                STEAM: _reactBoiler.Boiler.EXCEPTION,
                TEMPERATURE: '029'
              };
            } else {
              return {
                STEAM: _reactBoiler.Boiler.REMAIN_ALPHA,
                TEMPERATURE: '030'
              };
            }
          } else {
            if (WAS_OMEGA_DEFINED) {
              return {
                STEAM: _reactBoiler.Boiler.EXCEPTION,
                TEMPERATURE: '031'
              };
            } else {
              return {
                STEAM: _reactBoiler.Boiler.EXCEPTION,
                TEMPERATURE: '032'
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
                STEAM: _reactBoiler.Boiler.EXCEPTION,
                TEMPERATURE: '033'
              };
            } else {
              return {
                STEAM: _reactBoiler.Boiler.EXCEPTION,
                TEMPERATURE: '034'
              };
            }
          } else {
            if (WAS_OMEGA_DEFINED) {
              return {
                STEAM: _reactBoiler.Boiler.EXCEPTION,
                TEMPERATURE: '035'
              };
            } else {
              return {
                STEAM: _reactBoiler.Boiler.EXCEPTION,
                TEMPERATURE: '036'
              };
            }
          }
        } else {
          if (HAS_OMEGA_CHANGED) {
            if (WAS_ALPHA_DEFINED) {
              if (WAS_OMEGA_DEFINED) {
                return {
                  STEAM: _reactBoiler.Boiler.EXCEPTION,
                  TEMPERATURE: '037'
                };
              } else {
                return {
                  STEAM: _reactBoiler.Boiler.EXCEPTION,
                  TEMPERATURE: '038'
                };
              }
            } else {
              if (WAS_OMEGA_DEFINED) {
                return {
                  STEAM: _reactBoiler.Boiler.EXCEPTION,
                  TEMPERATURE: '039'
                };
              } else {
                return {
                  STEAM: _reactBoiler.Boiler.EXCEPTION,
                  TEMPERATURE: '040'
                };
              }
            }
          } else {
            if (WAS_ALPHA_DEFINED) {
              if (WAS_OMEGA_DEFINED) {
                return {
                  STEAM: _reactBoiler.Boiler.EXCEPTION,
                  TEMPERATURE: '041'
                };
              } else {
                return {
                  STEAM: _reactBoiler.Boiler.EXCEPTION,
                  TEMPERATURE: '042'
                };
              }
            } else {
              if (WAS_OMEGA_DEFINED) {
                return {
                  STEAM: _reactBoiler.Boiler.EXCEPTION,
                  TEMPERATURE: '043'
                };
              } else {
                return {
                  STEAM: _reactBoiler.Boiler.EXCEPTION,
                  TEMPERATURE: '044'
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
                STEAM: _reactBoiler.Boiler.EXCEPTION,
                TEMPERATURE: '045'
              };
            } else {
              return {
                STEAM: _reactBoiler.Boiler.EXCEPTION,
                TEMPERATURE: '046'
              };
            }
          } else {
            if (WAS_OMEGA_DEFINED) {
              return {
                STEAM: _reactBoiler.Boiler.EXCEPTION,
                TEMPERATURE: '047'
              };
            } else {
              return {
                STEAM: _reactBoiler.Boiler.EXCEPTION,
                TEMPERATURE: '048'
              };
            }
          }
        } else {
          if (WAS_ALPHA_DEFINED) {
            if (WAS_OMEGA_DEFINED) {
              return {
                STEAM: _reactBoiler.Boiler.EXCEPTION,
                TEMPERATURE: '049'
              };
            } else {
              return {
                STEAM: _reactBoiler.Boiler.EXCEPTION,
                TEMPERATURE: '050'
              };
            }
          } else {
            if (WAS_OMEGA_DEFINED) {
              return {
                STEAM: _reactBoiler.Boiler.EXCEPTION,
                TEMPERATURE: '051'
              };
            } else {
              return {
                STEAM: _reactBoiler.Boiler.EXCEPTION,
                TEMPERATURE: '052'
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
                STEAM: _reactBoiler.Boiler.LEAVE_ALPHA_LEAVE_OMEGA,
                TEMPERATURE: '053'
              };
            } else {
              return {
                STEAM: _reactBoiler.Boiler.EXCEPTION,
                TEMPERATURE: '054'
              };
            }
          } else {
            if (WAS_OMEGA_DEFINED) {
              return {
                STEAM: _reactBoiler.Boiler.EXCEPTION,
                TEMPERATURE: '055'
              };
            } else {
              return {
                STEAM: _reactBoiler.Boiler.EXCEPTION,
                TEMPERATURE: '056'
              };
            }
          }
        } else {
          if (WAS_ALPHA_DEFINED) {
            if (WAS_OMEGA_DEFINED) {
              return {
                STEAM: _reactBoiler.Boiler.EXCEPTION,
                TEMPERATURE: '057'
              };
            } else {
              return {
                STEAM: _reactBoiler.Boiler.LEAVE_ALPHA,
                TEMPERATURE: '058'
              };
            }
          } else {
            if (WAS_OMEGA_DEFINED) {
              return {
                STEAM: _reactBoiler.Boiler.EXCEPTION,
                TEMPERATURE: '059'
              };
            } else {
              return {
                STEAM: _reactBoiler.Boiler.EXCEPTION,
                TEMPERATURE: '060'
              };
            }
          }
        }
      } else {
        if (HAS_OMEGA_CHANGED) {
          if (WAS_ALPHA_DEFINED) {
            if (WAS_OMEGA_DEFINED) {
              return {
                STEAM: _reactBoiler.Boiler.EXCEPTION,
                TEMPERATURE: '061'
              };
            } else {
              return {
                STEAM: _reactBoiler.Boiler.EXCEPTION,
                TEMPERATURE: '062'
              };
            }
          } else {
            if (WAS_OMEGA_DEFINED) {
              return {
                STEAM: _reactBoiler.Boiler.EXCEPTION,
                TEMPERATURE: '063'
              };
            } else {
              return {
                STEAM: _reactBoiler.Boiler.EXCEPTION,
                TEMPERATURE: '064'
              };
            }
          }
        } else {
          if (WAS_ALPHA_DEFINED) {
            if (WAS_OMEGA_DEFINED) {
              return {
                STEAM: _reactBoiler.Boiler.EXCEPTION,
                TEMPERATURE: '065'
              };
            } else {
              return {
                STEAM: _reactBoiler.Boiler.EXCEPTION,
                TEMPERATURE: '066'
              };
            }
          } else {
            if (WAS_OMEGA_DEFINED) {
              return {
                STEAM: _reactBoiler.Boiler.EXCEPTION,
                TEMPERATURE: '067'
              };
            } else {
              return {
                STEAM: _reactBoiler.Boiler.INDEX,
                TEMPERATURE: '068'
              };
            }
          }
        }
      }
    }
  }
}
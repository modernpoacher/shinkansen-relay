'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Steam = undefined;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ALPHA = 'alpha';
var OMEGA = 'omega';

var EMBARK = 'embark';
var DEBARK = 'debark';

var INDEX = 'INDEX';

var ENTER_ALPHA = 'ENTER_ALPHA';
var LEAVE_ALPHA = 'LEAVE_ALPHA';

var CHANGE_ALPHA = 'CHANGE_ALPHA';
var REMAIN_ALPHA = 'REMAIN_ALPHA';

var ENTER_OMEGA = 'ENTER_OMEGA';
var LEAVE_OMEGA = 'LEAVE_OMEGA';

var CHANGE_OMEGA = 'CHANGE_OMEGA';
var REMAIN_OMEGA = 'REMAIN_OMEGA';

var ENTER_ALPHA_ENTER_OMEGA = 'ENTER_ALPHA_ENTER_OMEGA';
var LEAVE_ALPHA_LEAVE_OMEGA = 'LEAVE_ALPHA_LEAVE_OMEGA';

var CHANGE_ALPHA_ENTER_OMEGA = 'CHANGE_ALPHA_ENTER_OMEGA';
var CHANGE_ALPHA_LEAVE_OMEGA = 'CHANGE_ALPHA_LEAVE_OMEGA';

var REMAIN_ALPHA_ENTER_OMEGA = 'REMAIN_ALPHA_ENTER_OMEGA';
var REMAIN_ALPHA_LEAVE_OMEGA = 'REMAIN_ALPHA_LEAVE_OMEGA';

var CHANGE_ALPHA_CHANGE_OMEGA = 'CHANGE_ALPHA_CHANGE_OMEGA';
var CHANGE_ALPHA_REMAIN_OMEGA = 'CHANGE_ALPHA_REMAIN_OMEGA';

var REMAIN_ALPHA_CHANGE_OMEGA = 'REMAIN_ALPHA_CHANGE_OMEGA';
var REMAIN_ALPHA_REMAIN_OMEGA = 'REMAIN_ALPHA_REMAIN_OMEGA';

var EXCEPTION = 'EXCEPTION';

var FAILURE = 0;
var SUCCESS = 1;
var IN_PROGRESS = 3;
var NO_DECISION = 4;
var COMPLETE = 5;
var PENDING = 6;

function regulate(_ref) {
  var _ref$now = _ref.now;
  _ref$now = _ref$now === undefined ? {} : _ref$now;
  var alpha = _ref$now.alpha,
      omega = _ref$now.omega,
      _ref$was = _ref.was,
      was = _ref$was === undefined ? {} : _ref$was;

  var HAS_ALPHA = !!alpha;
  var HAS_OMEGA = !!omega;
  var HAS_ALPHA_CHANGED = alpha !== was[ALPHA];
  var HAS_OMEGA_CHANGED = omega !== was[OMEGA];
  var WAS_ALPHA_DEFINED = ALPHA in was;
  var WAS_OMEGA_DEFINED = OMEGA in was;

  return {
    HAS_ALPHA: HAS_ALPHA,
    HAS_OMEGA: HAS_OMEGA,
    HAS_ALPHA_CHANGED: HAS_ALPHA_CHANGED,
    HAS_OMEGA_CHANGED: HAS_OMEGA_CHANGED,
    WAS_ALPHA_DEFINED: WAS_ALPHA_DEFINED,
    WAS_OMEGA_DEFINED: WAS_OMEGA_DEFINED
  };
}

function generate(_ref2) {
  var HAS_ALPHA = _ref2.HAS_ALPHA,
      HAS_OMEGA = _ref2.HAS_OMEGA,
      HAS_ALPHA_CHANGED = _ref2.HAS_ALPHA_CHANGED,
      HAS_OMEGA_CHANGED = _ref2.HAS_OMEGA_CHANGED,
      WAS_ALPHA_DEFINED = _ref2.WAS_ALPHA_DEFINED,
      WAS_OMEGA_DEFINED = _ref2.WAS_OMEGA_DEFINED;

  if (HAS_ALPHA) {
    if (HAS_OMEGA) {
      if (HAS_ALPHA_CHANGED) {
        if (HAS_OMEGA_CHANGED) {
          if (WAS_ALPHA_DEFINED) {
            if (WAS_OMEGA_DEFINED) {
              return {
                ROUTE: CHANGE_ALPHA_CHANGE_OMEGA,
                PIVOT: '001'
              };
            } else {
              return {
                ROUTE: CHANGE_ALPHA_ENTER_OMEGA,
                PIVOT: '002'
              };
            }
          } else {
            if (WAS_OMEGA_DEFINED) {
              return {
                ROUTE: EXCEPTION,
                PIVOT: '003'
              };
            } else {
              return {
                ROUTE: ENTER_ALPHA_ENTER_OMEGA,
                PIVOT: '004'
              };
            }
          }
        } else {
          if (WAS_ALPHA_DEFINED) {
            if (WAS_OMEGA_DEFINED) {
              return {
                ROUTE: EXCEPTION,
                PIVOT: '005'
              };
            } else {
              return {
                ROUTE: EXCEPTION,
                PIVOT: '006'
              };
            }
          } else {
            if (WAS_OMEGA_DEFINED) {
              return {
                ROUTE: EXCEPTION,
                PIVOT: '007'
              };
            } else {
              return {
                ROUTE: EXCEPTION,
                PIVOT: '008'
              };
            }
          }
        }
      } else {
        if (HAS_OMEGA_CHANGED) {
          if (WAS_ALPHA_DEFINED) {
            if (WAS_OMEGA_DEFINED) {
              return {
                ROUTE: REMAIN_ALPHA_CHANGE_OMEGA,
                PIVOT: '009'
              };
            } else {
              return {
                ROUTE: REMAIN_ALPHA_ENTER_OMEGA,
                PIVOT: '010'
              };
            }
          } else {
            if (WAS_OMEGA_DEFINED) {
              return {
                ROUTE: EXCEPTION,
                PIVOT: '011'
              };
            } else {
              return {
                ROUTE: EXCEPTION,
                PIVOT: '012'
              };
            }
          }
        } else {
          if (WAS_ALPHA_DEFINED) {
            if (WAS_OMEGA_DEFINED) {
              return {
                ROUTE: REMAIN_ALPHA_REMAIN_OMEGA,
                PIVOT: '013'
              };
            } else {
              return {
                ROUTE: EXCEPTION,
                PIVOT: '014'
              };
            }
          } else {
            if (WAS_OMEGA_DEFINED) {
              return {
                ROUTE: EXCEPTION,
                PIVOT: '015'
              };
            } else {
              return {
                ROUTE: EXCEPTION,
                PIVOT: '016'
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
                ROUTE: CHANGE_ALPHA_LEAVE_OMEGA,
                PIVOT: '017'
              };
            } else {
              return {
                ROUTE: EXCEPTION,
                PIVOT: '018'
              };
            }
          } else {
            if (WAS_OMEGA_DEFINED) {
              return {
                ROUTE: EXCEPTION,
                PIVOT: '019'
              };
            } else {
              return {
                ROUTE: EXCEPTION,
                PIVOT: '020'
              };
            }
          }
        } else {
          if (WAS_ALPHA_DEFINED) {
            if (WAS_OMEGA_DEFINED) {
              return {
                ROUTE: EXCEPTION,
                PIVOT: '021'
              };
            } else {
              return {
                ROUTE: CHANGE_ALPHA,
                PIVOT: '022'
              };
            }
          } else {
            if (WAS_OMEGA_DEFINED) {
              return {
                ROUTE: EXCEPTION,
                PIVOT: '023'
              };
            } else {
              return {
                ROUTE: ENTER_ALPHA,
                PIVOT: '024'
              };
            }
          }
        }
      } else {
        if (HAS_OMEGA_CHANGED) {
          if (WAS_ALPHA_DEFINED) {
            if (WAS_OMEGA_DEFINED) {
              return {
                ROUTE: REMAIN_ALPHA_LEAVE_OMEGA,
                PIVOT: '025'
              };
            } else {
              return {
                ROUTE: EXCEPTION,
                PIVOT: '026'
              };
            }
          } else {
            if (WAS_OMEGA_DEFINED) {
              return {
                ROUTE: EXCEPTION,
                PIVOT: '027'
              };
            } else {
              return {
                ROUTE: EXCEPTION,
                PIVOT: '028'
              };
            }
          }
        } else {
          if (WAS_ALPHA_DEFINED) {
            if (WAS_OMEGA_DEFINED) {
              return {
                ROUTE: EXCEPTION,
                PIVOT: '029'
              };
            } else {
              return {
                ROUTE: REMAIN_ALPHA,
                PIVOT: '030'
              };
            }
          } else {
            if (WAS_OMEGA_DEFINED) {
              return {
                ROUTE: EXCEPTION,
                PIVOT: '031'
              };
            } else {
              return {
                ROUTE: EXCEPTION,
                PIVOT: '032'
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
                ROUTE: EXCEPTION,
                PIVOT: '033'
              };
            } else {
              return {
                ROUTE: EXCEPTION,
                PIVOT: '034'
              };
            }
          } else {
            if (WAS_OMEGA_DEFINED) {
              return {
                ROUTE: EXCEPTION,
                PIVOT: '035'
              };
            } else {
              return {
                ROUTE: EXCEPTION,
                PIVOT: '036'
              };
            }
          }
        } else {
          if (HAS_OMEGA_CHANGED) {
            if (WAS_ALPHA_DEFINED) {
              if (WAS_OMEGA_DEFINED) {
                return {
                  ROUTE: EXCEPTION,
                  PIVOT: '037'
                };
              } else {
                return {
                  ROUTE: EXCEPTION,
                  PIVOT: '038'
                };
              }
            } else {
              if (WAS_OMEGA_DEFINED) {
                return {
                  ROUTE: EXCEPTION,
                  PIVOT: '039'
                };
              } else {
                return {
                  ROUTE: EXCEPTION,
                  PIVOT: '040'
                };
              }
            }
          } else {
            if (WAS_ALPHA_DEFINED) {
              if (WAS_OMEGA_DEFINED) {
                return {
                  ROUTE: EXCEPTION,
                  PIVOT: '041'
                };
              } else {
                return {
                  ROUTE: EXCEPTION,
                  PIVOT: '042'
                };
              }
            } else {
              if (WAS_OMEGA_DEFINED) {
                return {
                  ROUTE: EXCEPTION,
                  PIVOT: '043'
                };
              } else {
                return {
                  ROUTE: EXCEPTION,
                  PIVOT: '044'
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
                ROUTE: EXCEPTION,
                PIVOT: '045'
              };
            } else {
              return {
                ROUTE: EXCEPTION,
                PIVOT: '046'
              };
            }
          } else {
            if (WAS_OMEGA_DEFINED) {
              return {
                ROUTE: EXCEPTION,
                PIVOT: '047'
              };
            } else {
              return {
                ROUTE: EXCEPTION,
                PIVOT: '048'
              };
            }
          }
        } else {
          if (WAS_ALPHA_DEFINED) {
            if (WAS_OMEGA_DEFINED) {
              return {
                ROUTE: EXCEPTION,
                PIVOT: '049'
              };
            } else {
              return {
                ROUTE: EXCEPTION,
                PIVOT: '050'
              };
            }
          } else {
            if (WAS_OMEGA_DEFINED) {
              return {
                ROUTE: EXCEPTION,
                PIVOT: '051'
              };
            } else {
              return {
                ROUTE: EXCEPTION,
                PIVOT: '052'
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
                ROUTE: LEAVE_ALPHA_LEAVE_OMEGA,
                PIVOT: '053'
              };
            } else {
              return {
                ROUTE: EXCEPTION,
                PIVOT: '054'
              };
            }
          } else {
            if (WAS_OMEGA_DEFINED) {
              return {
                ROUTE: EXCEPTION,
                PIVOT: '055'
              };
            } else {
              return {
                ROUTE: EXCEPTION,
                PIVOT: '056'
              };
            }
          }
        } else {
          if (WAS_ALPHA_DEFINED) {
            if (WAS_OMEGA_DEFINED) {
              return {
                ROUTE: EXCEPTION,
                PIVOT: '057'
              };
            } else {
              return {
                ROUTE: LEAVE_ALPHA,
                PIVOT: '058'
              };
            }
          } else {
            if (WAS_OMEGA_DEFINED) {
              return {
                ROUTE: EXCEPTION,
                PIVOT: '059'
              };
            } else {
              return {
                ROUTE: EXCEPTION,
                PIVOT: '060'
              };
            }
          }
        }
      } else {
        if (HAS_OMEGA_CHANGED) {
          if (WAS_ALPHA_DEFINED) {
            if (WAS_OMEGA_DEFINED) {
              return {
                ROUTE: EXCEPTION,
                PIVOT: '061'
              };
            } else {
              return {
                ROUTE: EXCEPTION,
                PIVOT: '062'
              };
            }
          } else {
            if (WAS_OMEGA_DEFINED) {
              return {
                ROUTE: EXCEPTION,
                PIVOT: '063'
              };
            } else {
              return {
                ROUTE: EXCEPTION,
                PIVOT: '064'
              };
            }
          }
        } else {
          if (WAS_ALPHA_DEFINED) {
            if (WAS_OMEGA_DEFINED) {
              return {
                ROUTE: EXCEPTION,
                PIVOT: '065'
              };
            } else {
              return {
                ROUTE: EXCEPTION,
                PIVOT: '066'
              };
            }
          } else {
            if (WAS_OMEGA_DEFINED) {
              return {
                ROUTE: EXCEPTION,
                PIVOT: '067'
              };
            } else {
              return {
                ROUTE: INDEX,
                PIVOT: '068'
              };
            }
          }
        }
      }
    }
  }
}

var Steam = exports.Steam = function () {
  function Steam() {
    (0, _classCallCheck3.default)(this, Steam);
  }

  (0, _createClass3.default)(Steam, null, [{
    key: 'ALPHA',
    get: function get() {
      return ALPHA;
    }
  }, {
    key: 'OMEGA',
    get: function get() {
      return OMEGA;
    }
  }, {
    key: 'EMBARK',
    get: function get() {
      return EMBARK;
    }
  }, {
    key: 'DEBARK',
    get: function get() {
      return DEBARK;
    }
  }, {
    key: 'INDEX',
    get: function get() {
      return INDEX;
    }
  }, {
    key: 'ENTER_ALPHA',
    get: function get() {
      return ENTER_ALPHA;
    }
  }, {
    key: 'LEAVE_ALPHA',
    get: function get() {
      return LEAVE_ALPHA;
    }
  }, {
    key: 'CHANGE_ALPHA',
    get: function get() {
      return CHANGE_ALPHA;
    }
  }, {
    key: 'REMAIN_ALPHA',
    get: function get() {
      return REMAIN_ALPHA;
    }
  }, {
    key: 'ENTER_OMEGA',
    get: function get() {
      return ENTER_OMEGA;
    }
  }, {
    key: 'LEAVE_OMEGA',
    get: function get() {
      return LEAVE_OMEGA;
    }
  }, {
    key: 'CHANGE_OMEGA',
    get: function get() {
      return CHANGE_OMEGA;
    }
  }, {
    key: 'REMAIN_OMEGA',
    get: function get() {
      return REMAIN_OMEGA;
    }
  }, {
    key: 'ENTER_ALPHA_ENTER_OMEGA',
    get: function get() {
      return ENTER_ALPHA_ENTER_OMEGA;
    }
  }, {
    key: 'LEAVE_ALPHA_LEAVE_OMEGA',
    get: function get() {
      return LEAVE_ALPHA_LEAVE_OMEGA;
    }
  }, {
    key: 'CHANGE_ALPHA_ENTER_OMEGA',
    get: function get() {
      return CHANGE_ALPHA_ENTER_OMEGA;
    }
  }, {
    key: 'CHANGE_ALPHA_LEAVE_OMEGA',
    get: function get() {
      return CHANGE_ALPHA_LEAVE_OMEGA;
    }
  }, {
    key: 'REMAIN_ALPHA_ENTER_OMEGA',
    get: function get() {
      return REMAIN_ALPHA_ENTER_OMEGA;
    }
  }, {
    key: 'REMAIN_ALPHA_LEAVE_OMEGA',
    get: function get() {
      return REMAIN_ALPHA_LEAVE_OMEGA;
    }
  }, {
    key: 'CHANGE_ALPHA_CHANGE_OMEGA',
    get: function get() {
      return CHANGE_ALPHA_CHANGE_OMEGA;
    }
  }, {
    key: 'CHANGE_ALPHA_REMAIN_OMEGA',
    get: function get() {
      return CHANGE_ALPHA_REMAIN_OMEGA;
    }
  }, {
    key: 'REMAIN_ALPHA_CHANGE_OMEGA',
    get: function get() {
      return REMAIN_ALPHA_CHANGE_OMEGA;
    }
  }, {
    key: 'REMAIN_ALPHA_REMAIN_OMEGA',
    get: function get() {
      return REMAIN_ALPHA_REMAIN_OMEGA;
    }
  }, {
    key: 'EXCEPTION',
    get: function get() {
      return EXCEPTION;
    }
  }, {
    key: 'FAILURE',
    get: function get() {
      return FAILURE;
    }
  }, {
    key: 'SUCCESS',
    get: function get() {
      return SUCCESS;
    }
  }, {
    key: 'IN_PROGRESS',
    get: function get() {
      return IN_PROGRESS;
    }
  }, {
    key: 'NO_DECISION',
    get: function get() {
      return NO_DECISION;
    }
  }, {
    key: 'COMPLETE',
    get: function get() {
      return COMPLETE;
    }
  }, {
    key: 'PENDING',
    get: function get() {
      return PENDING;
    }
  }]);
  return Steam;
}();

Steam.regulate = regulate;
Steam.generate = generate;
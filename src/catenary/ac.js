import {
  Boiler
} from 'shinkansen-boiler'

export function ac ({
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
                SIGNAL: Boiler.CHANGE_ALPHA_CHANGE_OMEGA,
                CHARGE: '001'
              }
            } else {
              return {
                SIGNAL: Boiler.CHANGE_ALPHA_ENTER_OMEGA,
                CHARGE: '002'
              }
            }
          } else {
            if (
              WAS_OMEGA_DEFINED
            ) {
              return {
                SIGNAL: Boiler.EXCEPTION,
                CHARGE: '003'
              }
            } else {
              return {
                SIGNAL: Boiler.ENTER_ALPHA_ENTER_OMEGA,
                CHARGE: '004'
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
                SIGNAL: Boiler.EXCEPTION,
                CHARGE: '005'
              }
            } else {
              return {
                SIGNAL: Boiler.EXCEPTION,
                CHARGE: '006'
              }
            }
          } else {
            if (
              WAS_OMEGA_DEFINED
            ) {
              return {
                SIGNAL: Boiler.EXCEPTION,
                CHARGE: '007'
              }
            } else {
              return {
                SIGNAL: Boiler.EXCEPTION,
                CHARGE: '008'
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
                SIGNAL: Boiler.REMAIN_ALPHA_CHANGE_OMEGA,
                CHARGE: '009'
              }
            } else {
              return {
                SIGNAL: Boiler.REMAIN_ALPHA_ENTER_OMEGA,
                CHARGE: '010'
              }
            }
          } else {
            if (
              WAS_OMEGA_DEFINED
            ) {
              return {
                SIGNAL: Boiler.EXCEPTION,
                CHARGE: '011'
              }
            } else {
              return {
                SIGNAL: Boiler.EXCEPTION,
                CHARGE: '012'
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
                SIGNAL: Boiler.REMAIN_ALPHA_REMAIN_OMEGA,
                CHARGE: '013'
              }
            } else {
              return {
                SIGNAL: Boiler.EXCEPTION,
                CHARGE: '014'
              }
            }
          } else {
            if (
              WAS_OMEGA_DEFINED
            ) {
              return {
                SIGNAL: Boiler.EXCEPTION,
                CHARGE: '015'
              }
            } else {
              return {
                SIGNAL: Boiler.EXCEPTION,
                CHARGE: '016'
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
                SIGNAL: Boiler.CHANGE_ALPHA_LEAVE_OMEGA,
                CHARGE: '017'
              }
            } else {
              return {
                SIGNAL: Boiler.EXCEPTION,
                CHARGE: '018'
              }
            }
          } else {
            if (
              WAS_OMEGA_DEFINED
            ) {
              return {
                SIGNAL: Boiler.EXCEPTION,
                CHARGE: '019'
              }
            } else {
              return {
                SIGNAL: Boiler.EXCEPTION,
                CHARGE: '020'
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
                SIGNAL: Boiler.EXCEPTION,
                CHARGE: '021'
              }
            } else {
              return {
                SIGNAL: Boiler.CHANGE_ALPHA,
                CHARGE: '022'
              }
            }
          } else {
            if (
              WAS_OMEGA_DEFINED
            ) {
              return {
                SIGNAL: Boiler.EXCEPTION,
                CHARGE: '023'
              }
            } else {
              return {
                SIGNAL: Boiler.ENTER_ALPHA,
                CHARGE: '024'
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
                SIGNAL: Boiler.REMAIN_ALPHA_LEAVE_OMEGA,
                CHARGE: '025'
              }
            } else {
              return {
                SIGNAL: Boiler.EXCEPTION,
                CHARGE: '026'
              }
            }
          } else {
            if (
              WAS_OMEGA_DEFINED
            ) {
              return {
                SIGNAL: Boiler.EXCEPTION,
                CHARGE: '027'
              }
            } else {
              return {
                SIGNAL: Boiler.EXCEPTION,
                CHARGE: '028'
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
                SIGNAL: Boiler.EXCEPTION,
                CHARGE: '029'
              }
            } else {
              return {
                SIGNAL: Boiler.REMAIN_ALPHA,
                CHARGE: '030'
              }
            }
          } else {
            if (
              WAS_OMEGA_DEFINED
            ) {
              return {
                SIGNAL: Boiler.EXCEPTION,
                CHARGE: '031'
              }
            } else {
              return {
                SIGNAL: Boiler.EXCEPTION,
                CHARGE: '032'
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
                SIGNAL: Boiler.EXCEPTION,
                CHARGE: '033'
              }
            } else {
              return {
                SIGNAL: Boiler.EXCEPTION,
                CHARGE: '034'
              }
            }
          } else {
            if (
              WAS_OMEGA_DEFINED
            ) {
              return {
                SIGNAL: Boiler.EXCEPTION,
                CHARGE: '035'
              }
            } else {
              return {
                SIGNAL: Boiler.EXCEPTION,
                CHARGE: '036'
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
                  SIGNAL: Boiler.EXCEPTION,
                  CHARGE: '037'
                }
              } else {
                return {
                  SIGNAL: Boiler.EXCEPTION,
                  CHARGE: '038'
                }
              }
            } else {
              if (
                WAS_OMEGA_DEFINED
              ) {
                return {
                  SIGNAL: Boiler.EXCEPTION,
                  CHARGE: '039'
                }
              } else {
                return {
                  SIGNAL: Boiler.EXCEPTION,
                  CHARGE: '040'
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
                  SIGNAL: Boiler.EXCEPTION,
                  CHARGE: '041'
                }
              } else {
                return {
                  SIGNAL: Boiler.EXCEPTION,
                  CHARGE: '042'
                }
              }
            } else {
              if (
                WAS_OMEGA_DEFINED
              ) {
                return {
                  SIGNAL: Boiler.EXCEPTION,
                  CHARGE: '043'
                }
              } else {
                return {
                  SIGNAL: Boiler.EXCEPTION,
                  CHARGE: '044'
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
                SIGNAL: Boiler.EXCEPTION,
                CHARGE: '045'
              }
            } else {
              return {
                SIGNAL: Boiler.EXCEPTION,
                CHARGE: '046'
              }
            }
          } else {
            if (
              WAS_OMEGA_DEFINED
            ) {
              return {
                SIGNAL: Boiler.EXCEPTION,
                CHARGE: '047'
              }
            } else {
              return {
                SIGNAL: Boiler.EXCEPTION,
                CHARGE: '048'
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
                SIGNAL: Boiler.EXCEPTION,
                CHARGE: '049'
              }
            } else {
              return {
                SIGNAL: Boiler.EXCEPTION,
                CHARGE: '050'
              }
            }
          } else {
            if (
              WAS_OMEGA_DEFINED
            ) {
              return {
                SIGNAL: Boiler.EXCEPTION,
                CHARGE: '051'
              }
            } else {
              return {
                SIGNAL: Boiler.EXCEPTION,
                CHARGE: '052'
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
                SIGNAL: Boiler.LEAVE_ALPHA_LEAVE_OMEGA,
                CHARGE: '053'
              }
            } else {
              return {
                SIGNAL: Boiler.EXCEPTION,
                CHARGE: '054'
              }
            }
          } else {
            if (
              WAS_OMEGA_DEFINED
            ) {
              return {
                SIGNAL: Boiler.EXCEPTION,
                CHARGE: '055'
              }
            } else {
              return {
                SIGNAL: Boiler.EXCEPTION,
                CHARGE: '056'
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
                SIGNAL: Boiler.EXCEPTION,
                CHARGE: '057'
              }
            } else {
              return {
                SIGNAL: Boiler.LEAVE_ALPHA,
                CHARGE: '058'
              }
            }
          } else {
            if (
              WAS_OMEGA_DEFINED
            ) {
              return {
                SIGNAL: Boiler.EXCEPTION,
                CHARGE: '059'
              }
            } else {
              return {
                SIGNAL: Boiler.EXCEPTION,
                CHARGE: '060'
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
                SIGNAL: Boiler.EXCEPTION,
                CHARGE: '061'
              }
            } else {
              return {
                SIGNAL: Boiler.EXCEPTION,
                CHARGE: '062'
              }
            }
          } else {
            if (
              WAS_OMEGA_DEFINED
            ) {
              return {
                SIGNAL: Boiler.EXCEPTION,
                CHARGE: '063'
              }
            } else {
              return {
                SIGNAL: Boiler.EXCEPTION,
                CHARGE: '064'
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
                SIGNAL: Boiler.EXCEPTION,
                CHARGE: '065'
              }
            } else {
              return {
                SIGNAL: Boiler.EXCEPTION,
                CHARGE: '066'
              }
            }
          } else {
            if (
              WAS_OMEGA_DEFINED
            ) {
              return {
                SIGNAL: Boiler.EXCEPTION,
                CHARGE: '067'
              }
            } else {
              return {
                SIGNAL: Boiler.INDEX,
                CHARGE: '068'
              }
            }
          }
        }
      }
    }
  }
}

import '#relay/relay/initiate'

import '#relay/relay/regulate'

export default class Relay { // eslint-disable-line @typescript-eslint/no-extraneous-class -- Static class
  static initiate: RelayTypes.Initiate

  static regulate: RelayTypes.Regulate
}

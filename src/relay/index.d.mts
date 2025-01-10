declare module '#relay/relay' {
  export default class Relay { // eslint-disable-line @typescript-eslint/no-extraneous-class -- Static class
    static initiate (relay: { was: Record<PropertyKey, string>, now: Record<PropertyKey, string> }): RelayTypes.StateType

    static regulate (state: RelayTypes.StateType): RelayTypes.RelayType
  }
}

declare module 'shinkansen-relay/relay' {
  export { default } from '#relay/relay'
}

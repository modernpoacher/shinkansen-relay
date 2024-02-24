declare module 'shinkansen-relay/relay' {
  export default class Relay {
    static initiate (relay: { was: Record<string, string>, now: Record<string, string> }): StateType

    static regulate (state: StateType): RelayType
  }
}

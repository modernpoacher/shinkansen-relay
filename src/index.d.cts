interface RelayType {
  SIGNAL: string
  SERVICE: string
}

type StateType = Record<string, boolean>

declare module 'shinkansen-relay/relay/initiate' {
  export function initiate (relay: { was: Record<string, string>, now: Record<string, string> }): StateType
}

declare module 'shinkansen-relay/relay/regulate' {
  export function regulate (state: StateType): RelayType
}

declare module 'shinkansen-relay/relay' {
  export default class Relay {
    static initiate (relay: { was: Record<string, string>, now: Record<string, string> }): StateType

    static regulate (state: StateType): RelayType
  }
}

declare module 'shinkansen-relay' {
  export { default as Relay } from 'shinkansen-relay/relay'
}

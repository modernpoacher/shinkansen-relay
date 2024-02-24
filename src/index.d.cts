interface RelayType {
  SIGNAL: string
  SERVICE: string
}

type StateType = Record<string, boolean>

declare module 'shinkansen-relay/relay/initiate' {
  export function initiate (relay: { was: Record<string, unknown>, now: Record<string, unknown> }): Record<string, boolean>
}

declare module 'shinkansen-relay/relay/regulate' {
  export function regulate (relay: Record<string, boolean>): RelayType
}

declare module 'shinkansen-relay/relay' {
  export default class Relay {
    static initiate (relay: { was: Record<string, unknown>, now: Record<string, unknown> }): Record<string, boolean>

    static regulate (state: Record<string, boolean>): RelayType
  }
}

declare module 'shinkansen-relay' {
  export { default as Relay } from 'shinkansen-relay/relay'
}

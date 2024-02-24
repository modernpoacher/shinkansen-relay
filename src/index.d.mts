interface RelayType {
  SIGNAL: string
  SERVICE: string
}

type StateType = Record<string, boolean>

declare module 'shinkansen-relay' {
  export { default as Relay } from 'shinkansen-relay/relay'
}

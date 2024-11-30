declare namespace RelayTypes {
  export interface RelayType {
    SIGNAL: string
    SERVICE: string
  }

  export type StateType = Record<PropertyKey, boolean>
}

declare module '#relay' {
  export { default as Relay } from '#relay/relay'
}

declare module 'shinkansen-relay' {
  export * from '#relay'
}

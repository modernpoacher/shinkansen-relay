declare module '#relay/relay/initiate' {
  export function initiate (relay: { was: Record<PropertyKey, string>, now: Record<PropertyKey, string> }): RelayTypes.StateType
}

declare module 'shinkansen-relay/relay/initiate' {
  export * from '#relay/relay/initiate'
}

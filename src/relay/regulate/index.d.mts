declare module '#relay/relay/regulate' {
  export function regulate (state: RelayTypes.StateType): RelayTypes.RelayType
}

declare module 'shinkansen-relay/relay/regulate' {
  export * from '#relay/relay/regulate'
}

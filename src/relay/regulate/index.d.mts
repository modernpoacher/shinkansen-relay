declare module '#relay/relay/regulate' {
  export function regulate (params: RelayTypes.RegulateParamsType): RelayTypes.RegulateType
}

declare module 'shinkansen-relay/relay/regulate' {
  export * from '#relay/relay/regulate'
}

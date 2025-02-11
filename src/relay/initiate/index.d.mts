declare module '#relay/relay/initiate' {
  export function initiate (params: RelayTypes.InitiateParamsType): RelayTypes.InitiateType
}

declare module 'shinkansen-relay/relay/initiate' {
  export * from '#relay/relay/initiate'
}

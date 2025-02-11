declare module '#relay/relay' {
  export default class Relay { // eslint-disable-line @typescript-eslint/no-extraneous-class -- Static class
    static initiate (params: RelayTypes.InitiateParamsType): RelayTypes.InitiateType

    static regulate (params: RelayTypes.RegulateParamsType): RelayTypes.RegulateType
  }
}

declare module 'shinkansen-relay/relay' {
  export { default } from '#relay/relay'
}

declare global {
  namespace RelayTypes {
    export interface RegulateType {
      SIGNAL: string
      SERVICE: string
    }

    export type InitiateType = Record<PropertyKey, boolean>
  }
}

export {}

declare global {
  namespace RelayTypes {
    export type InitiateType = Record<PropertyKey, boolean>

    export interface RegulateType {
      SIGNAL: string
      SERVICE: string
    }

    export interface InitiateParamsType {
      was?: Record<PropertyKey, string> | Record<PropertyKey, never>
      now?: Record<PropertyKey, string> | Record<PropertyKey, never>
    }

    export type RegulateParamsType = InitiateType | Record<PropertyKey, never>

    export type Initiate = (params?: InitiateParamsType) => InitiateType

    export type Regulate = (params?: RegulateParamsType) => RegulateType
  }
}

export {}

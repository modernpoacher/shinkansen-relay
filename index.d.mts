declare global {
  namespace RelayTypes {
    export interface RelayType {
      SIGNAL: string
      SERVICE: string
    }

    export type StateType = Record<PropertyKey, boolean>
  }
}

export {}

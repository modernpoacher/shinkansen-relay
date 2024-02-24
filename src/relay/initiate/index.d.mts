declare module 'shinkansen-relay/relay/initiate' {
  export function initiate (relay: { was: Record<string, string>, now: Record<string, string> }): StateType
}

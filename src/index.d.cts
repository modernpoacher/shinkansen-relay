declare module 'shinkansen-relay/relay/regulate' {
  export { default as regulate } from './relay/regulate/index.mjs'
}

declare module 'shinkansen-relay/relay/initiate' {
  export { default as initiate } from './relay/initiate/index.mjs'
}

declare module 'shinkansen-relay/relay' {
  export { default as Relay } from './relay/index.mjs'
}

declare module 'shinkansen-relay' {
  export { default as Relay } from './relay/index.mjs'
}

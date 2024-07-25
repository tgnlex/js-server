
export const levelFormat = (label) => {
    return { level: `[${label.toUpperCase()}]` }
}

export const bindingFormat = (bindings) => {
  return { 
    pid: bindings.pid, 
    host: bindings.hostname,
    node_version: process.version,
  }
}

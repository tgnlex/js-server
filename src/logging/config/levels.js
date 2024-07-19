const logLevels = {
  levels: {
    fatal: 0, 
    alert: 10,
    crit: 20,
    error: 25, 
    warn: 30,
    notice: 40, 
    info: 50,
    http: 60,
    event: 70, 
    data: 75,
    signal: 80, 
    debug: 90,
    meta: 100
  },
  colors: {
    fatal: 'red',
    alert: 'red',
    crit: 'red',
    error: 'red',
    warn: 'orange',
    notice: 'purple',
    info: 'green',
    event: 'cyan',
    http: 'yellow',
    data: 'pink',
    signal: 'white',
    debug: 'white',
    meta: 'gray'
  }
}

export {logLevels};

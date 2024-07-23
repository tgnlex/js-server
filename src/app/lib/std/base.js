
export const noop = () => { return };

export const read = (data) => { return data };

export const sleep = (s) => {
  const duration = s * 1000;
  return new Promise((resolve) => setTimeout(resolve, duration));
}

export const sleepMS = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

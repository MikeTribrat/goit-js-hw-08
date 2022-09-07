export function save(key, value) {
  try {
    const serialized = JSON.stringify(value);
    localStorage.setItem(key, serialized);
  } catch (error) {
    console.log('Set state error: ', error.message);
  }
}

export function load(key) {
  let value;
  try {
    const state = localStorage.getItem(key);
    value = state === null ? undefined : JSON.parse(state);
  } catch (error) {
    console.log('Get state error: ', error.message);
  }
  return value;
}
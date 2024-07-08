export function removeNullKeys(obj) {
  const newObj = {};
  for (const key in obj) {
    if (obj[key] !== null) {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}

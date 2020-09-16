const deepClone = (obj) => {
  if (typeof obj !== "object" || obj == null) {
    return obj;
  }
  if (obj instanceof RegExp) {
    return new RegExp(obj);
  }
  if (obj instanceof Date) {
    return new Date(obj);
  }
  const result = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
    if (obj.hasOwnProperty[key]) {
      result[key] = deepClone(obj[key]);
    }
  }
  return result;
};
export default deepClone;

const arrFlat = (arr, result) => {
  result = result || [];
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      arrFlat(item, result);
    } else {
      result.push(item);
    }
  });
  return result;
};
export default arrFlat;

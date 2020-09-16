const maxItemOfArr = (arr) => {
  return arr.sort((a, b) => b - a)[0];
};
export default maxItemOfArr;

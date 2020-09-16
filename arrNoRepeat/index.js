const arrNoRepeat = (arr) => {
  if (!Array.isArray(arr)) {
    console.log("type error");
    return;
  }
  return arr.filter((value, index, self) => {
    return self.indexOf(value) == index;
  });
};
export default arrNoRepeat;

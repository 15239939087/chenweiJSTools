const quickSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }
  let midValue = arr.splice(Math.floor(arr.length / 2), 1)[0];
  let Arrleft = [];
  let Arrright = [];

  for (let i = 0; i < arr.length; i++) {
    arr[i] < midValue ? Arrleft.push(arr[i]) : Arrright.push(arr[i]);
  }
  return quickSort(Arrleft).concat(midValue, quickSort(Arrright));
};
export default quickSort;

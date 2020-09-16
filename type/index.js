const type = (obj) =>
  typeof obj !== "object"
    ? typeof obj
    : Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
export default type;

const myinstanceof = (leftValue, rightValue) => {
  if (typeof leftValue !== "object" || leftValue === null) return false;
  let rightProto = rightValue.prototype;
  let leftProto = leftValue.__proto__;
  while (true) {
    if (leftProto === null) {
      return false;
    }
    if (leftProto === rightProto) {
      return true;
    }
    leftProto = leftProto.__proto__;
  }
};
export default myinstanceof;

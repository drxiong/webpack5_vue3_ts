const str = 'xiongyan';
const obj = { foo: 'bar' };
const fun1 = str => {
  return str.toUpperCase();
};
console.log(obj, fun1(str));

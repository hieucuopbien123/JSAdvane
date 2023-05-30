// -> Bỏ dùng typeof vì {}, null, [], Date đều là object => lợi dụng toString của object

const getTypeOf = value => Object.prototype.toString.call(value).slice(8, -1);

console.log(getTypeOf(""));
console.log(getTypeOf([]));
console.log(getTypeOf(null));
console.log(getTypeOf(new Date()));
console.log(getTypeOf({}));
console.log(getTypeOf(NaN));
console.log(getTypeOf(new Function()));
console.log(getTypeOf(getTypeOf));
console.log(getTypeOf(true));
// console.log(getTypeOf(document)); // Chỉ có trong browser frontend
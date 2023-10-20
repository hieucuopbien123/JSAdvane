// Các tính năng càng hiện đại có thể trình duyệt cũ k chạy và cần chú ý polyfill
// Nếu báo is not a function thì có thể là trình duyệt cũ chưa update polyfill

// *ES2015
// Arrow function
// Class với constructor và hàm như bth
// let và const
// tepmlate string `${}`
// Promises

// *ES2016
// Array.prototype.includes()
// 2**2 = 4

// *ES2017
// Object.values/Object.entries
// Trailing commas in parameter lists: Cả hai (a) => {} và (a,) => {} đều là định nghĩa hàm hợp lệ
// async/await
// padStart()/padEnd()
/* Object.getOwnPropertyDescriptors
Enumerable properties object là các thuộc tính của 1 object mà sẽ hiển thị nếu ta muốn nó hiện ra bằng vòng for...in hoặc Object.keys, VD writable, enumerable...
Object.getOwnPropertyDescriptor của ES2017 giúp lấy ra toàn bộ Enumerable properties object của 1 biến
*/

// *ES2018
// finally trong try catch

// Phân biệt rest param và spread operator
// Rest param dùng với mảng, object, function params. VD với mảng:
const myArray = ["anonystick", "medium", "reddit"]
const [firstName, ...restElements] = myArray;
console.log(firstName); // anonystick
console.log(restElements); // ["medium", "reddit"]

// Spread operator chỉ dùng với mảng và object
const withoutAnonystick = ["medium", "Reddit"];
const wholeBlog= ["Anonystick", ...withoutAnonystick]; //["Anonystick", "medium", "Reddit"]

// Spread operator y hệt thay thế hoàn toàn API cũ là Object.assign();
// Object bên phải sẽ overwrite object bên trái
var o1 = {a: 1, b: 2};
var o2 = {b: 3};
console.log(Object.assign({}, {a: 0}, o1, o2)); // {a: 1, b: 3}
console.log({a: 0, ...o1, ...o2}); // {a: 1, b: 3}

// for await...of => loop qua 1 async/sync iterable object. Tức nó duyệt bất đồng bộ cần có await để làm nó đúng thứ tự => tức dùng khi cần duyệt 1 async iterable object 1 cách đồng bộ => éo bh dùng luôn ấy
async function* foo() { // 1 async iterable object 
  yield 1;
  yield 2;
  yield 3;
}
(async function() {
  for await (const num of foo()) {
    console.log(num); // 1 2
    if(num == 2){
      break;
    }
  }
})();


// *ES2019
// Array.prototype.flat()
// Hàm flat nhận number xác định depth muốn flat, truyền Infinity để flat thành 1 mảng đơn
const arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
console.log(arr4.flat(Infinity)) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Array.prototype.flatMap()
// flatMap sẽ gọi x.map().flat() liên tiếp nhau nhưng dùng hàm này sẽ đem lại performance tốt hơn
// Hàm này rất ảo. Nếu gọi mà k dùng, ở đây bỏ console.log sẽ gây lỗi
console.log([[2], [4], [6], [8, 10]].flatMap(val => [val[0]/2])); // [ 1, 2, 3, 4 ]

// Cú pháp JS rất ảo
const y = [10];
console.log(y/2); // 5 => nếu mảng chỉ có 1 phần tử, mà ta dùng như này nó tự convert sang số bth đấy. 
// => Do đó cú pháp bên trên khi viêt như dưới thực tế nó gọi map xong flat chả làm gì cả vì nó convert các element sang số từ trước khi gọi flat rồi
console.log([[2], [4], [6], [8]].flatMap(val => val/2)); // [ 1, 2, 3, 4 ]

// Object.fromEntries()
// String.prototype.trimStart()
// String.prototype.trimEnd()
console.log(Symbol('desc').description); // Symbol.prototype.description

// optional catch binding => catch có thể có param hoặc không
try{} catch{} 
try{} catch(e){} 


// *ES2020
// String.prototype.matchAll
// BigInt
// Optional Chaining Operator(?.)

// Dynamic import
// Trong nodejs, nhờ CommonJS mà ta dùng require() được, rồi sẽ convert hết sang import export thôi
// Trong browser dùng ES6, ta có thể nhúng file js vào với type="module" thì file js đó dung được import export trực tiếp bth. Khi đó, user tải lại trang sẽ phải tải lại file js. VD 10 user vào mà chỉ 2 user sử dụng tính năng trong file js đó thì việc tải file js mọi lần sẽ phí công
// Còn async và defer klq, defer là parse html xong mới load code js
// Dynamic import ra đời: khi dynamic import vào module trong browser, chỉ khi nào thực sự sử dụng mới load file js đó => Thg dùng ở frontend khi có tính năng ít ai sử dụng, hoặc có tính năng export ra file excel chẳng hạn thì cũng nên dùng dynamic import

// Promise.allSettled => Promise.all sẽ reject (gọi catch) nếu 1 trong các hàm reject, còn Promise.allSettled đảm bảo mọi hàm đều chạy được hết

// Promise.finally 
let isLoading = true;
new Promise((resolve) => {
  resolve("OK:: Call from promise");
}).then(function(mess) { console.log(mess) })
  .catch(function(error) { console.log(error); })
  .finally(function() { isLoading = false; console.log("Call from finally") });

// Nullish coalescing Operator
let anonystick = {
  profile: {
      website: 'anonystick.com',
      type: 'blog javascript',
      age: 0,
      release: ''
  }
}
// VD muốn check null thì hiển thị 1 giá trị khác. Nhưng dùng logic bth sẽ luôn convert "" và 0 là false, phải dùng null coalescing chỉ chạy vế phải nếu đúng chuẩn là null
console.log(anonystick.profile.age || 18) // 18
console.log(anonystick.profile.age ?? 18) // 0
console.log(anonystick.profile.release ? '17/07/2014' : 18) // 18
console.log(anonystick.profile.release ?? 18) // ''

// *ES2021
// String.prototype.replaceAll()
// Promise.any()
// Logical assignment operators(&&=, ||=, ??=)

// Numeric separator: Sử dụng dấu ngăn cách số cho dễ nhìn. Thư viện underscore trước có cung cấp
console.log(1_000_000_000); // 1000000000
console.log(1000.12_34); // 1000.1234

// WeakRef
// WeakMap và WeakSet khác Map và Set ở chỗ key của nó phải là 1 object. Trong JS thì GC sẽ k xóa object khỏi bộ nhớ nếu tham chiếu của nó vẫn tồn tại và có thể truy cập được, gây lãng phí. VD: Nếu có Map cặp key value đòi hỏi nhiều bộ nhớ và cần giải phóng càng sớm càng tốt thì nên dùng WeakMap. Nếu dùng object làm key cho WeakMap sẽ k cản nó bị xóa bởi GC vì nó chỉ tạo weak reference. Thg dùng Symbol làm key cho WeakMap
// Còn WeakRef có chức năng tương tự sẽ tạo weak reference tới object khác: 
const callback = () => {
  const aBigObj = new WeakRef({
    name: "Anonystick.com"
  });
  console.log(aBigObj.deref().name); // Gọi deref để return ra object gốc và gọi GC, sau khi bị claim sẽ undefined
}
(async function(){
  await new Promise((resolve) => {
    setTimeout(() => {
      callback(); //Print "Anonystick.com"
      resolve();
    }, 2000);
  });
  await new Promise((resolve) => {
    setTimeout(() => {
      callback(); // Chưa chắc "Anonystick.com" is printed. Nếu GC đã collect
      resolve();
    }, 5000);
  });
})();

// *ES2022
// await Promise.resolve(console.log("🎉")); => Promise dùng được ở toplevel mà k cần trong hàm async => chỉ dùng ở frontend chạy trong browser

// private và class
// K cần khởi tạo thuộc tính trong hàm tạo mà viết ngay ngoài class
// Thêm # để có biến private. Còn protected thì thêm prefix _
// Dùng [] để lấy giá trị là tên biến
const a = 'anony';
const b = 'stick';
class Anonystick {
  name = 'Tips javascript';
  #age = 37;
  static isBlog = true;

  static [a + b] = 'Tips javascript';
  [b + a] = 'wow kakakak'
}
new Anonystick().age;
Anonystick.anonystick;
new Anonystick().stickanon

// RegExp Match Indices => ít dùng
function displayError(text, message) {
  const re = /\b(continue|function|break|for|if)\b/d;
  const match = text.match(re);
  // Hàm indices trả ra position start và end của từ tìm được
  const [start, end] = match.indices[1];
  const error = ' '.repeat(start) + // Adjust the caret position.
    '^' +
    '-'.repeat(end - start - 1) +   // Append the underline.
    ' ' + message;                  // Append the message.
  console.log(text);
  console.log(error);
}
const code = 'const function = foo;'; // faulty code
displayError(code, 'Invalid variable name');

// *ES2023

// Trong browser, sort reverse splice đổi trực tiếp trên array cũ. Dùng toSorted toReversed toSpliced giải quyết.
// VD: dùng toSorted
// const array = [3, 2, 1];
// const sortedArray = array.toSorted();
// console.log(sortedArray); // [1, 2, 3]
// console.log(array); // [3, 2, 1]

// VD: Dùng with thêm vào vị trí nào giá trị nào
// const array = [1, 2, 2, 4];
// const withThree = array.with(2, 3);
// console.log(array); // [ 1, 2, 2, 4 ]
// console.log(withThree); // [ 1, 2, 3, 4 ]


// # Class trong JS
// ES5: từ khóa class chưa tồn tại khiến cho JS k dùng được cho OOP chuẩn
function City(name, x, y) {
  this.name = name;
  this.setLocation(x, y);
}
City.prototype.setLocation = function(x, y) {
  this.x = x;
  this.y = y;
};
City.prototype.getLocation = function() {
  return {
    x: this.x,
    y: this.y
  };
};
const _city = new City('Hồ Chí Minh', 100, 200);
console.log(_city.getLocation());
// ES6: từ khóa class trở thành chuẩn, kbh dùng function là class như trên nữa

// Trong JS, biến có các tính chất như C++. Nhưng ta thường muốn có tính chất immutable, tức đổi array trả ra 1 array mới mà k ảnh hưởng tới array cũ chẳng hạn. Có nhiều cách đạt được điều này:
// Ngày xưa thì thủ công việc copy array rồi thao tác với bản đã copy k ảnh hưởng bản gốc. Nhưng performance thấp, VD ta đã duyệt 1 lần để copy, sau đó thao tác có thể duyệt thêm vài lần nữa sẽ chậm
const people = [1,2,3];
const copiedPeople = [...people];

// JS cung ra các hàm giúp giữ tính immutable trực tiếp
const people2 = people.with(2, 4).toSorted().toReversed().toSpliced(0, 1, 10);
console.log(people2);

// Node phiên bản càng cao càng hỗ trợ js version lớn hơn và tương thích browser mới. Do đó dùng js và nodejs bản thấp sẽ đảm bảo tương thích hết.
// JS ra từ khóa using để tự clean up giá trị khi ra khỏi scope giống C# nhưng chỉ có ở phiên bản mới nhất

// Thay cho array.includes
console.log(1 in people);

// JS lúc trước k có phương thức lấy phần tử cuối cùng của array, bh dùng at()
const arr = [1,2,3];
console.log(arr.at(-1), arr.at(-2));

// Vấn đề copy object và array
// ... chỉ giúp shallow copy. Đổi trực tiếp thì k ảnh hưởng nhưng đổi reference nested thì ảnh hưởng => Chú ý đây là lỗi rất dễ nhầm tưởng là copy được
const bientruoc = {name: "a", test: { name: "a" }};
const biensau = { ...bientruoc };
biensau.name = "b";
biensau.test.name = "b";
console.log(bientruoc); // {name: "a", test: { name: "b" }};

const biensau2 = structuredClone(bientruoc);
biensau2.test.name = "c";
console.log(bientruoc); // k đổi

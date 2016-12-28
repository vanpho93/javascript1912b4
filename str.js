var obj = {
  a: 100,
  name: 'KP'
}
var a = String(obj);
// console.log(a);

var str = 'Khoa Pham';
// console.log(str.charAt(3));

var mang = ['Android', 'iOS', 'NodeJS', 'PHP', 'Javascript']
// console.log('SORT: ',mang.sort((a, b) => {
//
// }));

// var mang2 = mang.sort();
var mangSort = mang.sort((a, b) => {
  if(a.toLowerCase() > b.toLowerCase()) return 1;
  if(a.toLowerCase() < b.toLowerCase()) return -1;
  return 0;
});

//console.log(mangSort);

var a = 'Khoa Pham Training';
console.log(a.substr(5, 4));
console.log(a.substring(5, 9));

// var b = '    abcd    ';
// console.log(b);
// console.log(b.trim());
// console.log(b);
// console.log(b.length);

var c = 'Android, iOS, NodeJS, Java';
var d = c.split(', ', 2);
//console.log(d);

var e = 'Training Training KhoaPham Training';
console.log(e.replace('Training', 'NodeJS'));
// console.log(e);

console.log(e.indexOf('Train', 1));

//title, link, hinh, desc
var mang = [];
function TinTuc (title, link, hinh, desc){
  this.title = title;
}

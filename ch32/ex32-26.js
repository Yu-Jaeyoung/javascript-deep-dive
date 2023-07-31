const str = 'Hello World';

console.log(str.substring(0, 5));
console.log(str.slice(0, 5));

console.log(str.substring(2));
console.log(str.slice(2));

console.log(str.substring(-5));
// 뒤에서 5자리를 잘라내어 반환
console.log(str.slice(-5));
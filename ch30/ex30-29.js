const today = new Date('2023/07/27/23:30');

console.log(today.toString());
console.log(today.toISOString());

console.log(today.toString().slice(0, 10));
console.log(today.toISOString().slice(0, 10).replace(/-/g, ''));
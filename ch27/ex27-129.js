console.log([5, 10, 15].every(item => item > 3));

console.log([5, 10, 15].every(item => item > 10));

// 빈 배열의 경우 언제나 true를 반환
console.log([].every(item => item > 3));

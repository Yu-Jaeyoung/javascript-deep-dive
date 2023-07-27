// 인수가 정상적인 유한수이면 true를 반환
console.log(Number.isFinite(0));
console.log(Number.isFinite(Number.MAX_VALUE));
console.log(Number.isFinite(Number.MIN_VALUE));

// 인수가 무한수이면 false를 반환
console.log(Number.isFinite(Infinity));
console.log(Number.isFinite(-Infinity));
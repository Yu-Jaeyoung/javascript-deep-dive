// 인수가 정수이면 true를 반환
console.log(Number.isInteger(0));
console.log(Number.isInteger(123));
console.log(Number.isInteger(-123));

// 0.5는 정수가 아님
console.log(Number.isInteger(0.5));

// '123'을 숫자로 암묵적 타입 변환하지 않음
console.log(Number.isInteger(false));

// false를 숫자로 암묵적 타입 변환하지 않음
console.log(Number.isInteger(false));

// Infinity/-Infinity는 정수가 아님
console.log(Number.isInteger(Infinity));
console.log(Number.isInteger(-Infinity));
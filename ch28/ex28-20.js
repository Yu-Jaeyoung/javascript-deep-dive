// 0은 안전한 정수
console.log(Number.isSafeInteger(0));

// 1000000000000000은 안전한 정수
console.log(Number.isSafeInteger(1000000000000000));

// 10000000000000001은 안전하지 않은 정수
console.log(Number.isSafeInteger(10000000000000001));

// 0.5는 정수가 아님
console.log(Number.isSafeInteger(0.5));

// '123'을 숫자로 암묵적 타입 변환하지 않음
console.log(Number.isSafeInteger('123'));

// false를 숫자로 암묵적 타입 변환하지 않음
console.log(Number.isSafeInteger(false));

// Infinity / -Infinity는 정수가 아님
console.log(Number.isSafeInteger(Infinity));
console.log(Number.isSafeInteger(-Infinity));
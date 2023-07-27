// Number.isNaN은 인수를 숫자로 암묵적 타입 변환핮 않음
console.log(Number.isNaN(undefined));

// isNaN은 인수를 숫자로 암묵적 타입 변환. undefined는 NaN으로 암묵적 타입 변환
console.log(isNaN(undefined));
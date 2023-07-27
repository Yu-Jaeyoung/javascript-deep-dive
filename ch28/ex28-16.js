// Number.isFinite는 인수를 숫자로 암묵적 타입 변환하지 않음
console.log(Number.isFinite(null));

// isFinite는 인수를 암묵적 타입으로 변환. null은 0으로 암묵적 타입 변환
console.log(isFinite(null));
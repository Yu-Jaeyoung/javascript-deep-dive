// 인수가 유한수이면 true를 반환
console.log(isFinite(0));
console.log(isFinite(2e64));
console.log(isFinite("10"));
console.log(isFinite(null));

// 인수가 무한수 또는 NaN으로 평가되는 값이라면 false를 반환
console.log(isFinite(Infinity));
console.log(isFinite(-Infinity));

// 인수가 NaN으로 평가되는 값이라면 false를 반환
console.log(isFinite(NaN));
console.log(isFinite("Hello"));
console.log(isFinite("2005/12/12"));
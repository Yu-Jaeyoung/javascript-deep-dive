const mySymbol = Symbol();

// 심벌 값은 암묵적으로 문자열이나 숫자 타입으로 변환되지 않음
console.log(mySymbol + '');
console.log(+mySymbol);
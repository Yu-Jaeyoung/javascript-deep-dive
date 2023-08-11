const mySymbol = Symbol();

// 불리언 타입으로는 암묵적으로 타입 변환됨
console.log(!!mySymbol);

// if 문 등에서 존재 확인 가능
if (mySymbol) console.log('mySymbol is not empty.');
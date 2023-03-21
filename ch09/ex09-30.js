// 좌항의 피연산자가 null 또는 undefined이면 우항의 피연산자를 반환
// 그렇지 않으면 좌항의 피연산자를 반환
var foo = null ?? "default string";
console.log(foo); // "default string"
/*
const o = {};

// 내부 슬롯은 자바스크립트 엔진 내부 로직이므로 직접 접근할 수 없음
o.[[Prototype]] // -> Uncaught SyntaxError: Unexpected token '['
// 단, 일부 내부 슬롯과 내부 메서드에 한하여 간접적으로 접근할 수 있는 순단을 제공하기는 함
o.__proto__ // -> Object.prototype
*/
// 기명 함수 표현식
var nameFunc = function foo() {};
console.log(nameFunc.name);

// 익명 함수 표현식
var annoymousFunc = function () {};
// ES5: name 프로퍼티는 빈 문자열을 값으로 가짐
// ES6: name 프로퍼티는 함수 객체를 가리키는 변수 이름으로 값을 받음
console.log(annoymousFunc.name);

// 함수 선언문(Function declaration)
function bar() {}
console.log(bar.name);
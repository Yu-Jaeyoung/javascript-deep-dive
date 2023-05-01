// 런타임 이전에 선언 단계가 실행된다. 아직 변수가 초기화 되지 않음
// 초기화 이전의 일시적 사각지대에서는 변수를 참조할 수 없음
console.log(foo); // ReferenceError: foo is not defined

let foo; // 변수 선언문에서 초기화 단계가 실행
console.log(foo); // undefined

foo = 1;
console.log(foo); // 1
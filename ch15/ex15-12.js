// 이 예제는 브라우저 환경에서 실행해야 함
let x = 1;

// let, const 키워드로 선언한 전역 변수는 전역 객체 window의 프로퍼티가 아님
console.log(window.x); // undefined
console.log(x); // 1